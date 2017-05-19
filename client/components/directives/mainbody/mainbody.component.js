import angular from 'angular'

export class MainbodyComponent {}

export default angular.module('directives.mainbody', [])
  .component('mainbody', {
    template: require('./mainbody.html'),
    controller: MainbodyComponent
  })
  .name
