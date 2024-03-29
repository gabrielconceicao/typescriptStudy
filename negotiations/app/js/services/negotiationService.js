System.register(["../models/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, NegotiationService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            NegotiationService = class NegotiationService {
                getNegotiations(handler) {
                    return fetch('http://localhost:8080/dados')
                        .then(res => handler(res))
                        .then(res => res.json())
                        .then((dados) => dados.map(dado => new index_1.Negotiation(new Date(), dado.vezes, dado.montante)))
                        .catch(err => { throw new Error("Erro ao obter os dados da API"); });
                }
            };
            exports_1("NegotiationService", NegotiationService);
        }
    };
});
