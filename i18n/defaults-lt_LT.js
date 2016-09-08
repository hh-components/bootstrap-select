/*!
 * Bootstrap-select v1.11.0 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2016 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */

(function (root, factory) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    
    
    var a0 = require('jquery');
    module.exports = factory(a0) || module.exports;;
}(this, function (jQuery) {
    (function ($) {
        $.fn.selectpicker.defaults = {
            noneSelectedText: 'Niekas nepasirinkta',
            noneResultsText: 'Niekas nesutapo su {0}',
            countSelectedText: function (numSelected, numTotal) {
                return numSelected == 1 ? '{0} elementas pasirinktas' : '{0} elementai(-ų) pasirinkta';
            },
            maxOptionsText: function (numAll, numGroup) {
                return [
                    numAll == 1 ? 'Pasiekta riba ({n} elementas daugiausiai)' : 'Riba pasiekta ({n} elementai(-ų) daugiausiai)',
                    numGroup == 1 ? 'Grupės riba pasiekta ({n} elementas daugiausiai)' : 'Grupės riba pasiekta ({n} elementai(-ų) daugiausiai)'
                ];
            },
            selectAllText: 'Pasirinkti visus',
            deselectAllText: 'Atmesti visus',
            multipleSeparator: ', '
        };
    }(jQuery));
}));