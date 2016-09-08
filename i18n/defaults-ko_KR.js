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
            noneSelectedText: '항목을 선택해주세요',
            noneResultsText: '{0} 검색 결과가 없습니다',
            countSelectedText: function (numSelected, numTotal) {
                return '{0}개를 선택하였습니다';
            },
            maxOptionsText: function (numAll, numGroup) {
                return [
                    '{n}개까지 선택 가능합니다',
                    '해당 그룹은 {n}개까지 선택 가능합니다'
                ];
            },
            selectAllText: '전체선택',
            deselectAllText: '전체해제',
            multipleSeparator: ', '
        };
    }(arguments[0]));
}));