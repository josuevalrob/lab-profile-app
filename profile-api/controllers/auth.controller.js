const createError = require('http-errors');
const User = require('../models/user.model');
const passport = require('passport');

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
 passport.authenticate('auth-local', (error, user, message) => {
    if (error) {
      next(error);
    } else if (!user) {
      next(createError(400, message));
    } else {
      req.login(user, (error) => {
        if (error) {
          next(error)
        } else {
          res.status(201).json(user);
        }
      })
    }
  })(req, res, next);
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
