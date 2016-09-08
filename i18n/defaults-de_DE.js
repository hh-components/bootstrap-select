require('../bootstrap-select.js');
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
}(this, function (arguments[0]) {
    (function ($) {
        $.fn.selectpicker.defaults = {
            noneSelectedText: 'Bitte wählen...',
            noneResultsText: 'Keine Ergebnisse für {0}',
            countSelectedText: function (numSelected, numTotal) {
                return numSelected == 1 ? '{0} Element ausgewählt' : '{0} Elemente ausgewählt';
            },
            maxOptionsText: function (numAll, numGroup) {
                return [
                    numAll == 1 ? 'Limit erreicht ({n} Element max.)' : 'Limit erreicht ({n} Elemente max.)',
                    numGroup == 1 ? 'Gruppen-Limit erreicht ({n} Element max.)' : 'Gruppen-Limit erreicht ({n} Elemente max.)'
                ];
            },
            selectAllText: 'Alles auswählen',
            deselectAllText: 'Nichts auswählen',
            multipleSeparator: ', '
        };
    }(arguments[0]));
}));