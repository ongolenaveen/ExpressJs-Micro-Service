const clientService = require("../services/client.Service");
const config = require("../config");
const express = require('express');
const router = express.Router();

/**
 * @desc Retrieve clients.
 * @param req - Request
 * @param res - Response
 * @Param next - Next Middleware Handler
 * @return object - Json Response
 */
router.get("/",async (req, res, next) => {
    // Read the data from client data store.
    clientService.getClients()
    .then((data) => {
        // Success Response
        res.json(data);
    })
    .catch((error)=>{
        // Error While getting ciient from data store.
        next(error);
    });
});

/**
 * @desc Get client details.
 * @param req - Request
 * @param res - Response
 * @Param next - Next Middleware Handler
 * @return object - Json Response
 */
router.get("/:key",async (req, res, next) => {
    let key = req.params.key
    // Read the data from client data store.
    clientService.getClient(key)
    .then((data) => {
        // Success Response
        res.json(data);
    })
    .catch((error)=>{
        // Error While getting ciient from data store.
        next(error);
    });
});

module.exports = router;
