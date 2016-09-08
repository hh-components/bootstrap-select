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
            noneSelectedText: '没有选中任何项',
            noneResultsText: '没有找到匹配项',
            countSelectedText: '选中{1}中的{0}项',
            maxOptionsText: [
                '超出限制 (最多选择{n}项)',
                '组选择超出限制(最多选择{n}组)'
            ],
            multipleSeparator: ', '
        };
    }(arguments[0]));
}));