const { Post, User } = require('../models/index')

module.exports = {
    async index( req, res ) {
        let posts = await  Post.findAll({
            attributes: ['id', 'title', 'body','userId'],
            include: {
                model: User,
                as: "author",
                attributes: ['name', 'email']
            }
        });
        
        res.json(posts)
    }
}