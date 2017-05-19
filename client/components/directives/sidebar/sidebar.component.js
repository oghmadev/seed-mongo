'use strict'

import angular from 'angular'

export class SidebarComponent {
  constructor ($state, Auth) {
    'ngInject'

    this.$state = $state
    this.isLoggedIn = Auth.isLoggedInSync
    this.isAdmin = Auth.isAdminSync
    this.getCurrentUser = Auth.getCurrentUserSync
  }
}

export default angular.module('directives.sidebar', [])
  .component('sidebar', {
    template: require('./sidebar.html'),
    controller: SidebarComponent
  })
  .name
