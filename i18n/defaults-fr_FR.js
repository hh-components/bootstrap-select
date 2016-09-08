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
            noneSelectedText: 'Aucune sélection',
            noneResultsText: 'Aucun résultat pour {0}',
            countSelectedText: function (numSelected, numTotal) {
                return numSelected > 1 ? '{0} éléments sélectionnés' : '{0} élément sélectionné';
            },
            maxOptionsText: function (numAll, numGroup) {
                return [
                    numAll > 1 ? 'Limite atteinte ({n} éléments max)' : 'Limite atteinte ({n} élément max)',
                    numGroup > 1 ? 'Limite du groupe atteinte ({n} éléments max)' : 'Limite du groupe atteinte ({n} élément max)'
                ];
            },
            multipleSeparator: ', ',
            selectAllText: 'Tout Sélectionner',
            deselectAllText: 'Tout Dé-selectionner'
        };
    }(arguments[0]));
}));