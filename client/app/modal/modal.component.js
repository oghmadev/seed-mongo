'use strict'

import angular from 'angular'
import { ModalService } from './modal.service'

export class ModalComponent {
  constructor (Modal) {
    'ngInject'

    this.modalSvc = Modal
  }
}

export default angular.module('seedMongoApp.modal', [])
  .service('Modal', ModalService)
  .component('modal', {
    template: require('./modal.html'),
    controller: ModalComponent
  })
  .name
