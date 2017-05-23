'use strict'

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
      password: ''
    }

    this.isSaving = false
    this.saveSuccess = false
    this.saveFailure = false
    this.errDuplicate = false
  }

  register (form) {
    if (form.$valid) {
      this.saveSuccess = false
      this.saveFailure = false
      this.errDuplicate = false
      this.isSaving = true

      return this.Auth.createUser(this.user)
        .then(() => {
          this.reset(form)
          this.isSaving = false
          this.saveSuccess = true
        })
        .catch(error => {
          this.isSaving = false
          this.saveFailure = true

          if (error.data.code != null && error.data.code === 11000) this.errDuplicate = true
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
      password: ''
    }

    this.isSaving = false
    this.saveSuccess = false
    this.saveFailure = false
    this.errDuplicate = false
  }

  closeNotification () {
    this.saveSuccess = false
    this.saveFailure = false
    this.errDuplicate = false
  }
}

export default angular.module('seedMongoApp.signup', [uiRouter])
  .config(routes)
  .component('signup', {
    template: require('./signup.html'),
    controller: SignupController
  })
  .name
