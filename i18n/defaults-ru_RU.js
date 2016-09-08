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
            noneSelectedText: 'Ничего не выбрано',
            noneResultsText: 'Совпадений не найдено {0}',
            countSelectedText: 'Выбрано {0} из {1}',
            maxOptionsText: [
                'Достигнут предел ({n} {var} максимум)',
                'Достигнут предел в группе ({n} {var} максимум)',
                [
                    'items',
                    'item'
                ]
            ],
            doneButtonText: 'Закрыть',
            multipleSeparator: ', '
        };
    }(arguments[0]));
}));