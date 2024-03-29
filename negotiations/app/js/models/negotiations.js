System.register([], function (exports_1, context_1) {
    "use strict";
    var Negotiations;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Negotiations = class Negotiations {
                constructor() {
                    this._negotiations = [];
                }
                add(negotiation) {
                    this._negotiations.push(negotiation);
                }
                getAllNegotiations() {
                    return [].concat(this._negotiations);
                }
                printLog() {
                    console.log(JSON.stringify(this._negotiations));
                }
            };
            exports_1("Negotiations", Negotiations);
        }
    };
});
