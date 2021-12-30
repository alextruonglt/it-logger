const express = require("express")
const router = express.Router();

// @route GET api/ticketLogs
// @desc Get all ticketLogs
// @access Public

router.get("/", (req, res) => {
    res.send("Get All logs")
})


// @route POST api/ticketLogs
// @desc Add New Log
// @access Private

router.post("/", (req, res) => {
    res.send("Add New Log")
})

// @route PUT api/ticketLogs/
// @desc Update Logs
// @access Public

router.get("/", (req, res) => {
    res.send("Update Logs")
})



// @route DELETE api/ticketLogs/
// @desc Update Logs
// @access Public

router.delete("/", (req, res) => {
    res.send("Delete Logs")
})