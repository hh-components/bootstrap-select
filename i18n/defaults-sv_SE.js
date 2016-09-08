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
            noneSelectedText: 'Inget valt',
            noneResultsText: 'Inget sökresultat matchar {0}',
            countSelectedText: function (numSelected, numTotal) {
                return numSelected === 1 ? '{0} alternativ valt' : '{0} alternativ valda';
            },
            maxOptionsText: function (numAll, numGroup) {
                return [
                    'Gräns uppnåd (max {n} alternativ)',
                    'Gräns uppnåd (max {n} gruppalternativ)'
                ];
            },
            selectAllText: 'Markera alla',
            deselectAllText: 'Avmarkera alla',
            multipleSeparator: ', '
        };
    }(arguments[0]));
}));