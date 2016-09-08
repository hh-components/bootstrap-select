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
            noneSelectedText: 'Válasszon!',
            noneResultsText: 'Nincs találat {0}',
            countSelectedText: function (numSelected, numTotal) {
                return '{0} elem kiválasztva';
            },
            maxOptionsText: function (numAll, numGroup) {
                return [
                    'Legfeljebb {n} elem választható',
                    'A csoportban legfeljebb {n} elem választható'
                ];
            },
            selectAllText: 'Mind',
            deselectAllText: 'Egyik sem',
            multipleSeparator: ', '
        };
    }(arguments[0]));
}));