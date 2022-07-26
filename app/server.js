const express = require('express')
const app = express()
const { sequelize } = require('./models/index')

//Setting
const PORT = 3000

//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Routes
app.use(require('./routes'))

app.listen(PORT, async () => {

    console.log(`Example app listening on port http://localhost:${PORT}`)
    
        sequelize.authenticate()
        .then(()=>{console.log('nos hemos conectado a la base de datas');})
        .catch(err => console.log(err))

        // try {
        //     await sequelize.authenticate();
        //     console.log('Connection has been established successfully.');
        //   } catch (error) {
        //     console.error('Unable to connect to the database:', error);
        //   }

})
