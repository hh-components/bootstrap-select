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
            noneSelectedText: 'Vyberte zo zoznamu',
            noneResultsText: 'Pre výraz {0} neboli nájdené žiadne výsledky',
            countSelectedText: 'Vybrané {0} z {1}',
            maxOptionsText: [
                'Limit prekročený ({n} {var} max)',
                'Limit skupiny prekročený ({n} {var} max)',
                [
                    'položiek',
                    'položka'
                ]
            ],
            selectAllText: 'Vybrať všetky',
            deselectAllText: 'Zrušiť výber',
            multipleSeparator: ', '
        };
    }(arguments[0]));
}));