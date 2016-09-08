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
            noneSelectedText: '沒有選取任何項目',
            noneResultsText: '沒有找到符合的結果',
            countSelectedText: '已經選取{0}個項目',
            maxOptionsText: [
                '超過限制 (最多選擇{n}項)',
                '超過限制(最多選擇{n}組)'
            ],
            selectAllText: '選取全部',
            deselectAllText: '全部取消',
            multipleSeparator: ', '
        };
    }(arguments[0]));
}));