'use strict'

import angular from 'angular'
import uiRouter from 'angular-ui-router'
import routes from './signup.routes'

export class SignupController {
  constructor (Auth, $state) {
    'ngInject'

    this.Auth = Auth
    this.$state = $state
  }

  $onInit () {
    this.user = {
      name: '',
      email: '',
      password: '',
      role: ''
    }

    this.isSaving = false
    this.saveSuccess = false
    this.saveFailure = false
  }

  register (form) {
    if (form.$valid) {
      this.saveSuccess = false
      this.saveFailure = false
      this.isSaving = true

      return this.Auth.createUser(this.user)
        .then(() => {
          this.reset(form)
          this.isSaving = false
          this.saveSuccess = true
        })
        .catch(() => {
          this.isSaving = false
          this.saveFailure = true
        })
    }
  }

  reset (form) {
    const controlNames = Object.keys(form).filter(key => {
      return key.indexOf('$') !== 0
    })

    for (let control of controlNames) {
      form[control].$setViewValue('')
      form[control].$render()
    }

    form.$setPristine()
    form.$setUntouched()

    this.user = {
      name: '',
      email: '',
      password: '',
      role: ''
    }

    this.isSaving = false
    this.saveSuccess = false
    this.saveFailure = false
  }

  closeNotification () {
    this.saveSuccess = false
    this.saveFailure = false
  }
}

export default angular.module('seedMongoApp.signup', [uiRouter])
  .config(routes)
  .component('signup', {
    template: require('./signup.html'),
    controller: SignupController
  })
  .name
