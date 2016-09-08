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
            noneSelectedText: 'Odaberite stavku',
            noneResultsText: 'Nema rezultata pretrage {0}',
            countSelectedText: function (numSelected, numTotal) {
                return numSelected == 1 ? '{0} stavka selektirana' : '{0} stavke selektirane';
            },
            maxOptionsText: function (numAll, numGroup) {
                return [
                    numAll == 1 ? 'Limit je postignut ({n} stvar maximalno)' : 'Limit je postignut ({n} stavke maksimalno)',
                    numGroup == 1 ? 'Grupni limit je postignut ({n} stvar maksimalno)' : 'Grupni limit je postignut ({n} stavke maksimalno)'
                ];
            },
            selectAllText: 'Selektiraj sve',
            deselectAllText: 'Deselektiraj sve',
            multipleSeparator: ', '
        };
    }(jQuery));
}));