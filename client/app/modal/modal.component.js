'use strict'

import angular from 'angular'
import allergyIntolerance from './allergyIntolerance/allergyIntolerance.component'
import condition from './condition/condition.component'
import educationWork from './educationWork/educationWork.component'
import encounter from './encounter/encounter.component'
import history from './history/history.component'
import immunization from './immunization/immunization.component'
import lifestyle from './lifestyle/lifestyle.component'
import medicationHistory from './medicationHistory/medicationHistory.component'
import medicationOrder from './medicationOrder/medicationOrder.component'
import procedureRequest from './procedureRequest/procedureRequest.component'
import procedureHistory from './procedureHistory/procedureHistory.component'
import profile from './profile/profile.component'
import { ModalService } from './modal.service'
import { AllergyIntoleranceService } from './allergyIntolerance/allergyIntolerance.service'
import { ConditionService } from './condition/condition.service'
import { EducationWorkService } from './educationWork/educationWork.service'
import { EncounterService } from './encounter/encounter.service'
import { HistoryService } from './history/history.service'
import { ImmunizationService } from './immunization/immunization.service'
import { LifestyleService } from './lifestyle/lifestyle.service'
import { MedicationOrderService } from './medicationOrder/medicationOrder.service'
import { MedicationHistoryService } from './medicationHistory/medicationHistory.service'
import { ProcedureRequestService } from './procedureRequest/procedureRequest.service'
import { ProcedureHistoryService } from './procedureHistory/procedureHistory.service'
import { ProfileService } from './profile/profile.service'

export class ModalComponent {
  constructor (Modal) {
    'ngInject'

    this.modalSvc = Modal
  }
}

export default angular.module('sisaApp.modal', [])
  .service('Modal', ModalService)
  .component('modal', {
    template: require('./modal.html'),
    controller: ModalComponent
  })
  .name
