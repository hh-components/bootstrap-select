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
            noneSelectedText: 'Nenhum seleccionado',
            noneResultsText: 'Sem resultados contendo {0}',
            countSelectedText: 'Selecionado {0} de {1}',
            maxOptionsText: [
                'Limite ultrapassado (máx. {n} {var})',
                'Limite de seleções ultrapassado (máx. {n} {var})',
                [
                    'itens',
                    'item'
                ]
            ],
            multipleSeparator: ', '
        };
    }(arguments[0]));
}));