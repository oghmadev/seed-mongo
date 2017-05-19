'use strict'

import angular from 'angular'
import ngTranslate from 'angular-translate'
import esAR from './es-AR/es-AR'

export default angular.module('sisaApp.translate', [ngTranslate])
  .config(function ($translateProvider) {
    'ngInject'

    $translateProvider.preferredLanguage('es')
    $translateProvider.useSanitizeValueStrategy('sanitizeParameters')
    $translateProvider.translations('es', esAR)
  })
  .name
