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
}(this, function (jQuery) {
    (function ($) {
        $.fn.selectpicker.defaults = {
            noneSelectedText: 'Tidak ada yang dipilih',
            noneResultsText: 'Tidak ada yang cocok {0}',
            countSelectedText: '{0} terpilih',
            maxOptionsText: [
                'Mencapai batas (maksimum {n})',
                'Mencapai batas grup (maksimum {n})'
            ],
            selectAllText: 'Pilih Semua',
            deselectAllText: 'Hapus Semua',
            multipleSeparator: ', '
        };
    }(jQuery));
}));