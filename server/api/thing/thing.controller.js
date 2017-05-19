'use strict'

import * as utils from '../../components/controllerUtils/controllerUtils'
import Thing from './thing.model'

// Gets a list of Things
export function index (req, res) {
  return Thing.find().exec()
    .then(utils.respondWithResult(res))
    .catch(utils.handleError(res))
}

// Gets a single Thing from the DB
export function show (req, res) {
  return Thing.findById(req.params.id).exec()
    .then(utils.handleEntityNotFound(res))
    .then(utils.respondWithResult(res))
    .catch(utils.handleError(res))
}

// Creates a new Thing in the DB
export function create (req, res) {
  return Thing.create(req.body)
    .then(utils.respondWithResult(res, 201))
    .catch(utils.handleError(res))
}

// Upserts the given Thing in the DB at the specified ID
export function upsert (req, res) {
  if (req.body._id) delete req.body._id

  const options = {
    upsert: true,
    setDefaultsOnInsert: true,
    runValidators: true
  }

  return Thing.findOneAndUpdate(req.params.id, req.body, options).exec()
    .then(utils.respondWithResult(res))
    .catch(utils.handleError(res))
}

// Updates an existing Thing in the DB
export function patch (req, res) {
  if (req.body._id) delete req.body._id

  return Thing.findById(req.params.id).exec()
    .then(utils.handleEntityNotFound(res))
    .then(utils.patchUpdates(req.body))
    .then(utils.respondWithResult(res))
    .catch(utils.handleError(res))
}

// Deletes a Thing from the DB
export function destroy (req, res) {
  return Thing.findById(req.params.id).exec()
    .then(utils.handleEntityNotFound(res))
    .then(utils.removeEntity(res))
    .catch(utils.handleError(res))
}
