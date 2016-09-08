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
            noneSelectedText: 'Nic nie zaznaczono',
            noneResultsText: 'Brak wyników wyszukiwania {0}',
            countSelectedText: 'Zaznaczono {0} z {1}',
            maxOptionsText: [
                'Osiągnięto limit ({n} {var} max)',
                'Limit grupy osiągnięty ({n} {var} max)',
                [
                    'elementy',
                    'element'
                ]
            ],
            selectAll: 'Zaznacz wszystkie',
            deselectAll: 'Odznacz wszystkie',
            multipleSeparator: ', '
        };
    }(arguments[0]));
}));