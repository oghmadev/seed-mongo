'use strict'

import angular from 'angular'
// import ngAnimate from 'angular-animate'
import ngCookies from 'angular-cookies'
import ngResource from 'angular-resource'
import ngSanitize from 'angular-sanitize'
import 'angular-socket-io'
import uiRouter from 'angular-ui-router'
import { routeConfig } from './app.config'
import _Auth from '../components/auth/auth.module'
import account from './account'
import login from './account/login/login.component'
import signup from './account/signup/signup.component'
import settings from './account/settings/settings.component'
import match from '../components/directives/password-validation/password-validation'
import admin from './admin/admin.component'
import navbar from '../components/directives/navbar/navbar.component'
import footer from '../components/directives/footer/footer.component'
import sidebar from '../components/directives/sidebar/sidebar.component'
import mainbody from '../components/directives/mainbody/mainbody.component'
import main from './main/main.component'
import constants from './app.constants'
import util from '../components/util/util.module'
import socket from '../components/socket/socket.service'
import translate from '../components/translate/translate'
import './app.css'

angular.module('seedSqlApp', [ngCookies, ngResource, ngSanitize, 'btford.socket-io', uiRouter, _Auth, account, login,
  signup, settings, match, admin, navbar, footer, main, constants, socket, util, translate, sidebar, mainbody])
  .config(routeConfig)
  .run(function ($rootScope, $location, Auth) {
    'ngInject'

    $rootScope.$on('$stateChangeStart', function (event, next) {
      Auth.isLoggedIn(function (loggedIn) {
        if (next.authenticate && !loggedIn) $location.path('/login')
        if (next.url === '/login' && loggedIn) $location.path('/')
      })
    })
  })

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['seedSqlApp'], {
      strictDi: true
    })
  })
