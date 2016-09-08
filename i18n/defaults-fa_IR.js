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
            noneSelectedText: 'چیزی انتخاب نشده است',
            noneResultsText: 'هیج مشابهی برای {0} پیدا نشد',
            countSelectedText: '{0} از {1} مورد انتخاب شده',
            maxOptionsText: [
                'بیشتر ممکن نیست {حداکثر {n} عدد}',
                'بیشتر ممکن نیست {حداکثر {n} عدد}'
            ],
            selectAllText: 'انتخاب همه',
            deselectAllText: 'انتخاب هیچ کدام',
            multipleSeparator: ', '
        };
    }(arguments[0]));
}));