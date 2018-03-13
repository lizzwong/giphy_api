const express = require('express');
const router = express.Router();

const axios = require('axios');

const apiKey = process.env.GIPHY_API_KEY;
console.log('key is', apiKey);

router.get('/:search', (request,response)=>{
    let search = request.params.search
    let url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${apiKey}`

    axios.get(url)
        .then(res =>{
            response.send(res.data);
        })
        .catch (error => {
            console.log('error on request', error);
            response.sendStatus(500);
        })

})

router.get('/', (request,response)=>{
    let url = `https://api.giphy.com/v1/gifs/random?&api_key=${apiKey}`

    axios.get(url)
        .then(res =>{
            response.send(res.data);
        })
        .catch (error => {
            console.log('error on request', error);
            response.sendStatus(500);  
        })
})



module.exports = router;