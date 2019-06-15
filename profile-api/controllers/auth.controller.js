const createError = require('http-errors');
const User = require('../models/user.model');

module.exports.register = (req, res, next) => {
  const correo = req.body.email
  User.findOne({email: correo})
    .then(user=>{
      if(user){
        throw createError(409, "This mail is already taken")
      }
      else{
        return new User(req.body).save();
      }
    })
    .then(user=>res.status(201).json(user))
    .catch(next)
}

module.exports.authenticate = (req, res, next) => {
  

}

module.exports.logout = (req, res, next) => {
  throw createError(501, 'Not Implemented')
}

module.exports.getProfile = (req, res, next) => {
  throw createError(501, 'Not Implemented')
}

module.exports.editProfile = (req, res, next) => {
  throw createError(501, 'Not Implemented')
}
