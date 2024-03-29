System.register(["./negotiation", "./negotiations", "./partialNegotiations", "./equals", "./print"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (negotiation_1_1) {
                exportStar_1(negotiation_1_1);
            },
            function (negotiations_1_1) {
                exportStar_1(negotiations_1_1);
            },
            function (partialNegotiations_1_1) {
                exportStar_1(partialNegotiations_1_1);
            },
            function (equals_1_1) {
                exportStar_1(equals_1_1);
            },
            function (print_1_1) {
                exportStar_1(print_1_1);
            }
        ],
        execute: function () {
        }
    };
});
