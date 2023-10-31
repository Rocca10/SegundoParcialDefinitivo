const {Router} = require('express');
const router = Router();

//const fetch = require('node-fetch');
const axios = require('axios');


router.get('/',async (req,res)=>{
    const response = await axios('https://jsonplaceholder.typicode.com/users');
    console.log(response.data);
    res.send(response.data);
}) 


module.exports = router;
