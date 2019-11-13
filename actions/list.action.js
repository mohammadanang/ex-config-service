const Config = require("../models/config.model")

class List {
    constructor(params) {
        this.params = params
    }

    async exec() {
        try {
            let data = await Config.find(this.params).exec()

            return data
        } catch(err) {
            throw err
        }
    }
}

module.exports = List
