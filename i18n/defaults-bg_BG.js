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
            noneSelectedText: 'Нищо избрано',
            noneResultsText: 'Няма резултат за {0}',
            countSelectedText: function (numSelected, numTotal) {
                return numSelected == 1 ? '{0} избран елемент' : '{0} избрани елемента';
            },
            maxOptionsText: function (numAll, numGroup) {
                return [
                    numAll == 1 ? 'Лимита е достигнат ({n} елемент максимум)' : 'Лимита е достигнат ({n} елемента максимум)',
                    numGroup == 1 ? 'Груповия лимит е достигнат ({n} елемент максимум)' : 'Груповия лимит е достигнат ({n} елемента максимум)'
                ];
            },
            selectAllText: 'Избери всички',
            deselectAllText: 'Размаркирай всички',
            multipleSeparator: ', '
        };
    }(arguments[0]));
}));