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
            noneSelectedText: 'Nu a fost selectat nimic',
            noneResultsText: 'Nu exista niciun rezultat {0}',
            countSelectedText: '{0} din {1} selectat(e)',
            maxOptionsText: [
                'Limita a fost atinsa ({n} {var} max)',
                'Limita de grup a fost atinsa ({n} {var} max)',
                [
                    'iteme',
                    'item'
                ]
            ],
            multipleSeparator: ', '
        };
    }(arguments[0]));
}));