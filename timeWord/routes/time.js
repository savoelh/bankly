
const express = require("express")
const router = new express.Router()
const Time = require("../models/time")

router.post("/", async function (req, res, next) {
    try {
        console.log(req.body)
        const time = await Time.translate(req.body)
        const convertedTime = `It is ${time.hour} ${time.minutes} ${time.time}` 
        console.log(convertedTime)
        return res.status(200).json({convertedTime})
    } catch (err) {
        next(err)
    }
})

module.exports = router;