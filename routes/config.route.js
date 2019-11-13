const express = require('express')
const router = express.Router()
const Create = require("../actions/create.action")
const List = require("../actions/list.action")

router.post("/", async (req, res) => {
    try {
        let inputs = {
            code: req.body.code
        }
        let { name, description, values } = req.body

        if(name) {
            inputs.name = name
        }

        if(description) {
            inputs.description = description
        }

        if(values) {
            inputs.values = JSON.parse(values)
        }

        let data = await new Create(inputs).exec()

        return res.status(201).json({
            status: "success",
            data,
            message: "Create successfully!"
        })
    } catch(err) {
        return res.send({
            status: "error",
            message: err.message
        })
    }
})

router.get("/", async (req, res) => {
    try {
        let params = {}
        let { code, name } = req.query

        if(code) {
            params.code = code
        }

        if(name) {
            params.name = name
        }

        let data = await new List(params).exec()

        return res.status(200).json({
            status: "success",
            data,
            message: "List successfully!"
        })
    } catch(err) {
        return res.send({
            status: "error",
            message: err.message
        })
    }
})

module.exports = router
