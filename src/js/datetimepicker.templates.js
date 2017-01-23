/* globals define, module, require, angular */

/**
 * @license angular-bootstrap-datetimepicker
 * Copyright 2016 Knight Rider Consulting, Inc. http://www.knightrider.com
 * License: MIT
 *
 * @author       Dale "Ducky" Lotts
 * @since        2016-Jan-31
 */

;(function (root, factory) {
  'use strict'
  /* istanbul ignore if */
  if (typeof module !== 'undefined' && module.exports) {
    var ng = typeof angular === 'undefined' ? require('angular') : angular
    factory(ng)
    module.exports = 'ui.bootstrap.datetimepicker.templates'
    /* istanbul ignore next */
  } else if (typeof define === 'function' && /* istanbul ignore next */ define.amd) {
    define(['angular'], factory)
  } else {
    factory(root.angular, root.moment)
  }
}(this, function (angular) {
  'use strict'
  angular.module('ui.bootstrap.datetimepicker').run(['$templateCache', function ($templateCache) {
    $templateCache.put('templates/datetimepicker.html', '<div class="">\n    <table style="width: 335px;" class="{{ data.currentView }}-view">\n        <thead>\n        <tr class="text-center">\n            <th class="" data-ng-click="changeView(data.currentView, data.leftDate, $event)" data-ng-show="data.leftDate.selectable"><button type="button" class="btn pull-left"><i class="icon-chevron-left"></i></button>\n            </th>\n          </th> <th colspan="{{data.currentView === \'day\' ? 5 : 2}}" data-ng-show="data.previousViewDate.selectable" data-ng-click="changeView(data.previousView, data.previousViewDate, $event)"><button class="btn btn-block" type="button">{{ data.previousViewDate.display }}</button></th>\n            <th class="" data-ng-click="changeView(data.currentView, data.rightDate, $event)" data-ng-show="data.rightDate.selectable"><button type="button" class="btn pull-right"><i class="icon-chevron-right"></i></button\n            </th>\n        </tr>\n        <tr>\n            <th class="dow" data-ng-repeat="day in data.dayNames">{{ day }}</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr data-ng-if="data.currentView !== \'day\'" data-ng-repeat="row in data.dates">\n            <td                          class="text-center" data-ng-repeat="dateObject in row" data-ng-class="" data-ng-click="changeView(data.nextView, dateObject, $event)"><button type="button" ng-disabled="!dateObject.selectable" class="btn btn-info" style="width: 100%;"><span class="ng-binding">{{ dateObject.display }}</span></button></td>\n        </tr>\n        <tr data-ng-if="data.currentView === \'day\'" data-ng-repeat="week in data.weeks">\n            <td data-ng-repeat="dateObject in week.dates" data-ng-click="changeView(data.nextView, dateObject, $event)" class="text-center"><button type="button" ng-disabled="!dateObject.selectable" style="width: 100%;" class="btn">{{ dateObject.display }}</button></td>\n        </tr>\n        </tbody>\n    </table>\n</div>\n')
  }])
}))
