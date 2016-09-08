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
            noneSelectedText: 'Nič izbranega',
            noneResultsText: 'Ni zadetkov za {0}',
            countSelectedText: function (numSelected, numTotal) {
                'Število izbranih: {0}';
            },
            maxOptionsText: function (numAll, numGroup) {
                return [
                    'Omejitev dosežena (max. izbranih: {n})',
                    'Omejitev skupine dosežena (max. izbranih: {n})'
                ];
            },
            selectAllText: 'Izberi vse',
            deselectAllText: 'Počisti izbor',
            multipleSeparator: ', '
        };
    }(arguments[0]));
}));