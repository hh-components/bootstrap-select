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
            noneSelectedText: 'Nessuna selezione',
            noneResultsText: 'Nessun risultato per {0}',
            countSelectedText: 'Selezionati {0} di {1}',
            maxOptionsText: [
                'Limite raggiunto ({n} {var} max)',
                'Limite del gruppo raggiunto ({n} {var} max)',
                [
                    'elementi',
                    'elemento'
                ]
            ],
            multipleSeparator: ', '
        };
    }(arguments[0]));
}));