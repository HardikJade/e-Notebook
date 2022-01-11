const express = require('express')
const User  = require('../models/User')
const { body, validationResult } = require('express-validator');
const router = express.Router()
router.post('/',[
    body('mail',"Enter The Valid Email").isEmail(),
    body('name',"Enter The Valid Name").isLength({min:5}),
    body('password',"Enter The Valid Password").isLength({min:8})
],(request,response)=>{
    const error = validationResult(request);
    if(!error.isEmpty()){
        response.json({error : error.array()})
    }else{
        User.create({
            name: request.body.name,
            mail : request.body.mail,
            password : request.body.password
        })
        .then((user)=>{
                response.json({'error' : "Success"})
        })
        .catch(e=>{
            response.json({"error" : "User Is Present"})
        })
    }
})
module.exports = router;