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
            noneSelectedText: 'Nic není vybráno',
            noneResultsText: 'Žádné výsledky {0}',
            countSelectedText: 'Označeno {0} z {1}',
            maxOptionsText: [
                'Limit překročen ({n} {var} max)',
                'Limit skupiny překročen ({n} {var} max)',
                [
                    'položek',
                    'položka'
                ]
            ],
            multipleSeparator: ', '
        };
    }(arguments[0]));
}));