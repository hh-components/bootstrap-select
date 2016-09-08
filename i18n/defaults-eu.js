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
            noneSelectedText: 'Hautapenik ez',
            noneResultsText: 'Emaitzarik ez {0}',
            countSelectedText: '{1}(e)tik {0} hautatuta',
            maxOptionsText: [
                'Mugara iritsita ({n} {var} gehienez)',
                'Taldearen mugara iritsita ({n} {var} gehienez)',
                [
                    'elementu',
                    'elementu'
                ]
            ],
            multipleSeparator: ', '
        };
    }(arguments[0]));
}));