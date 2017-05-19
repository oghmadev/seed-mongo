'use strict'

import { UtilService } from './util.service'

export default angular.module('seedMongoApp.util', [])
  .factory('Util', UtilService)
  .name
