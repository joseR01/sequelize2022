const { User } = require('../models/index')
const authConfig = require('../../config/auth')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {

    //login
    singIn(req, res) {
        
        const {email, password} = req.body

        User.findOne({ where: { email: email } }).then((user)=>{

            if (user === null) {
                res.status(400).json({msg:'el usuario no existe'})
            } else {
                if (bcrypt.compareSync(password, user.password)) {

                    // Creamos el token
                    let token = jwt.sign({ user: user }, authConfig.secret, {
                        expiresIn: authConfig.expires
                    });

                    res.json({
                        user: user,
                        token: token
                    })

                } else {

                    // Unauthorized Access
                    res.status(401).json({ msg: "Contraseña incorrecta" })
                }
            }
        }).catch((err)=>res.status(500).json(err))
    },

    //register
    singUp(req, res) {

        let password = req.body.password
        // Encriptamos la contraseña
        let has = bcrypt.hashSync(password, Number.parseInt(authConfig.rounds));

        // Crear un usuario
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: has
        }).then(user => {

            // Creamos el token
            let token = jwt.sign({ user: user }, authConfig.secret, {
                expiresIn: authConfig.expires
            });

            res.json({
                user: user,
                token: token
            });

        }).catch(err => {
            res.status(500).json(err);
        });
    }

}