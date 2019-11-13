const Config = require("../models/config.model")

class Create {
    constructor(inputs) {
        this.inputs = inputs
    }

    async exec() {
        try {
            let data = new Config(this.inputs)
            await data.save()

            return data
        } catch(err) {
            throw err
        }
    }
}

module.exports = Create
