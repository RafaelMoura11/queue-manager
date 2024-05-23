const express = require('express');
const router = express.Router()

router.post('/users', async (req,res) =>{
    return await res.status(201).json({
        Message: 'Usuario cadastrado'
    })
})