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
            noneSelectedText: 'Nothing selected',
            noneResultsText: 'No results match {0}',
            countSelectedText: function (numSelected, numTotal) {
                return numSelected == 1 ? '{0} item selected' : '{0} items selected';
            },
            maxOptionsText: function (numAll, numGroup) {
                return [
                    numAll == 1 ? 'Limit reached ({n} item max)' : 'Limit reached ({n} items max)',
                    numGroup == 1 ? 'Group limit reached ({n} item max)' : 'Group limit reached ({n} items max)'
                ];
            },
            selectAllText: 'Select All',
            deselectAllText: 'Deselect All',
            multipleSeparator: ', '
        };
    }(jQuery));
}));