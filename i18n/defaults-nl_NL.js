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
            noneSelectedText: 'Niets geselecteerd',
            noneResultsText: 'Geen resultaten gevonden voor {0}',
            countSelectedText: '{0} van {1} geselecteerd',
            maxOptionsText: [
                'Limiet bereikt ({n} {var} max)',
                'Groep limiet bereikt ({n} {var} max)',
                [
                    'items',
                    'item'
                ]
            ],
            multipleSeparator: ', '
        };
    }(arguments[0]));
}));