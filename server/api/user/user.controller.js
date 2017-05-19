'use strict'

import User from './user.model'

function validationError (res, statusCode) {
  statusCode = statusCode || 422

  return function (err) {
    return res.status(statusCode).json(err)
  }
}

function handleError (res, statusCode) {
  statusCode = statusCode || 500

  return function (err) {
    return res.status(statusCode).send(err)
  }
}

/**
 * Get list of users
 * restriction: 'admin'
 */
export function index (req, res) {
  return User.find({}, '-salt -password').exec()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(handleError(res))
}

/**
 * Creates a new user
 */
export function create (req, res, next) {
  const newUser = new User(req.body)
  newUser.provider = 'local'

  newUser.save()
    .then(function (user) {
      res.status(200).json(user)
    })
    .catch(validationError(res))
}

/**
 * Get a single user
 */
export function show (req, res, next) {
  const userId = req.params.id

  return User.findById(userId).exec()
    .then(user => {
      if (!user) return res.status(404).end()

      res.json(user.profile)
    })
    .catch(err => next(err))
}

/**
 * Deletes a user
 * restriction: 'admin'
 */
export function destroy (req, res) {
  return User.findByIdAndRemove(req.params.id).exec()
    .then(function () {
      res.status(204).end()
    })
    .catch(handleError(res))
}

/**
 * Change a users password
 */
export function changePassword (req, res, next) {
  const userId = req.user._id
  const oldPass = String(req.body.oldPassword)
  const newPass = String(req.body.newPassword)

  return User.findById(userId).exec()
    .then(user => {
      if (user.authenticate(oldPass)) {
        user.password = newPass
        return user.save()
          .then(() => {
            res.status(204).end()
          })
          .catch(validationError(res))
      } else {
        return res.status(403).end()
      }
    })
}

/**
 * Get my info
 */
export function me (req, res, next) {
  return User.findOne({ _id: req.user._id }, '-salt -password').exec()
    .then(user => { // don't ever give out the password or salt
      if (!user) return res.status(401).end()

      res.json(user)
    })
    .catch(err => next(err))
}

/**
 * Authentication callback
 */
export function authCallback (req, res, next) {
  res.redirect('/')
}
