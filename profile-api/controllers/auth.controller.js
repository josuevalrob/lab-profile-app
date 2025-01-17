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
  req.logout(); //ya viene con passport
  res.status(204).json();//hay que darle un numero, 204 es ok
}

module.exports.getProfile = (req, res, next) => {
  User.findById(req.params.id)
  .then((user)=>{
    if (!user) {
        throw createError(404, 'User not found')
      } else {
        res.json(user)
      }
  })
  .catch(next)
}

module.exports.editProfile = (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
  .then(user =>{
    if(!user){
      throw createError(404, 'User not found')
    }else{
      res.json(user)
    }
  }
  )
  .catch(next)
}
