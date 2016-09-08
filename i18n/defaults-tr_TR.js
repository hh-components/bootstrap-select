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
            noneSelectedText: 'Hiçbiri seçilmedi',
            noneResultsText: 'Hiçbir sonuç bulunamadı {0}',
            countSelectedText: function (numSelected, numTotal) {
                return numSelected == 1 ? '{0} öğe seçildi' : '{0} öğe seçildi';
            },
            maxOptionsText: function (numAll, numGroup) {
                return [
                    numAll == 1 ? 'Limit aşıldı (maksimum {n} sayıda öğe )' : 'Limit aşıldı (maksimum {n} sayıda öğe)',
                    numGroup == 1 ? 'Grup limiti aşıldı (maksimum {n} sayıda öğe)' : 'Grup limiti aşıldı (maksimum {n} sayıda öğe)'
                ];
            },
            selectAllText: 'Tümünü Seç',
            deselectAllText: 'Seçiniz',
            multipleSeparator: ', '
        };
    }(arguments[0]));
}));