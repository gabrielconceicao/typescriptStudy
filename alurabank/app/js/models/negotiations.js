class Negotiations {
    constructor() {
        this._negotiations = [];
    }
    add(negotiation) {
        this._negotiations.push(negotiation);
    }
    getAllNegotiations() {
        return [].concat(this._negotiations);
    }
}
