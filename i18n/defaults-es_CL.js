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
            noneSelectedText: 'No hay selección',
            noneResultsText: 'No hay resultados {0}',
            countSelectedText: 'Seleccionados {0} de {1}',
            maxOptionsText: [
                'Límite alcanzado ({n} {var} max)',
                'Límite del grupo alcanzado({n} {var} max)',
                [
                    'elementos',
                    'element'
                ]
            ],
            multipleSeparator: ', '
        };
    }(arguments[0]));
}));