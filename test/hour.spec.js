/**
 * @license angular-bootstrap-datetimepicker
 * (c) 2013 Knight Rider Consulting, Inc. http://www.knightrider.com
 * License: MIT
 */

/**
 *
 *    @author        Dale "Ducky" Lotts
 *    @since        7/21/13
 */


describe('hour view with initial date of 2013-01-22', function () {
    var $rootScope, element;
    beforeEach(module('ui.bootstrap.datetimepicker'));
    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $rootScope.date = new Date("2013-01-22");
        element = $compile('<datetimepicker data-datetimepicker-config="{ startView: \'hour\'}" data-ng-model="date"></datetimepicker>')($rootScope);
        $rootScope.$digest();
    }));
    it('has `.switch` element with a value of 2013-1-22', function () {
        expect(jQuery('.switch', element).text()).toBe('2013-Jan-22');
    });
    it('has 24 `.hour` elements', function () {
        expect(jQuery('.hour', element).length).toBe(24);
    });
    it('has 1 `.active` element with a value of 0:00', function () {
        expect(jQuery('.active', element).text()).toBe(moment($rootScope.date).format('H:mm'));
    });
});


describe('hour view with initial date of "2020-01-01T00:00:00.000", minView="hour", minuteStep: 15', function () {
    var $rootScope, element;
    beforeEach(module('ui.bootstrap.datetimepicker'));
    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $rootScope.date = moment("2020-01-01T00:00:00.000").toDate();
        element = $compile('<datetimepicker data-datetimepicker-config="{ startView: \'hour\', minView: \'hour\', minuteStep: 15 }" data-ng-model="date"></datetimepicker>')($rootScope);
        $rootScope.$digest();
    }));
    it('clicking the 4th `.hour` element will set the date value to 2020-01-01T03:00:00.000"', function () {
        expect(jQuery('.switch', element).text()).toBe('2020-Jan-01');

        expect(jQuery('.active', element).length).toBe(1);
        expect(jQuery('.hour', element).length).toBe(24);

        var selectedElement = jQuery(jQuery('.hour', element)[3]);
        selectedElement.trigger('click');

        expect(jQuery('.active', element).text()).toBe('3:00');
        expect($rootScope.date).toEqual(moment("2020-01-01T03:00:00.000").toDate());
    });
});