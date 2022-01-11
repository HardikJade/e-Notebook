const express = require('express')
const User  = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JSON_WT_ = "DSD46546987(*&^%$#@";
const router = express.Router()
router.post('/',[
    body('mail',"Enter The Valid Email").isEmail(),
    body('name',"Enter The Valid Name").isLength({min:5}),
    body('password',"Enter The Valid Password").isLength({min:8})
],async (request,response)=>{
    const error = validationResult(request);
    if(!error.isEmpty()){
        response.json({error : error.array()})
    }else{
        // Check if The User Exist Already
        let user = await User.findOne({mail : request.body.mail})
        if(user){response.status(400).json({'error' : {'type' : "User Already Exist"}})}
        else{
            //Using For Secure Salting And Hashing
            let salt = await bcrypt.genSalt(10);
            let secPassword = await bcrypt.hash(request.body.password,salt)
            //Creating User in Database
            User.create({
                name: request.body.name,
                mail : request.body.mail,
                password : secPassword
            })
            .then((user)=>{
                //Using JSON WEB TOKEN To send The Secure Data
                const dispatchData = {
                   "data" : {"user": user._id}
                }
                const fialSignature = jwt.sign(dispatchData,JSON_WT_)
                response.status(200).json({'error' : {
                    'type' : "Success",
                    'token' : fialSignature
                }})})
            .catch(e=>
                {response.status(400).json({"error" : {'type' : "Something Went Wrong "} })})    
            }
        }
    })
module.exports = router;