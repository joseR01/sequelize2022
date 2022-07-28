'use strict';
const { User, Post } = require('../../models/index')
const authConfig = require('../../../config/auth')
const bcrypt = require('bcrypt')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      User.create({ 
        name: "Jose" ,
        email:'josegregorio@gmail.com',
        password: bcrypt.hashSync('1234', Number.parseInt(authConfig.rounds)),
        posts: [
          {
            title: 'Title 1',
            body: 'Body 1'
          },
          {
            title: 'Title 2',
            body: 'Body 2'
          },
        ]
      }, {
        include: 'posts'
      }),

      User.create({ 
        name: "Leidys" ,
        email:'leidys@gmail.com',
        password: bcrypt.hashSync('1234', Number.parseInt(authConfig.rounds)),
        posts: [
          {
            title: 'Title 3',
            body: 'Body 3'
          },
          {
            title: 'Title 4',
            body: 'Body 4'
          },
        ]
      }, {
        include: 'posts'
      }),

      User.create({ 
        name: "Antonio" ,
        email:'antonio@gmail.com',
        password: bcrypt.hashSync('1234', Number.parseInt(authConfig.rounds)),
        posts: [
          {
            title: 'Title 5',
            body: 'Body 5'
          },
          {
            title: 'Title 6',
            body: 'Body 6'
          },
        ]
      }, {
        include: 'posts'
      })
    ])
  },

  down: (queryInterface, Sequelize) => {

    return Promise.all([
       queryInterface.bulkDelete('users', null, {}),
       queryInterface.bulkDelete('posts', null, {})
    ])
     
  }
};
