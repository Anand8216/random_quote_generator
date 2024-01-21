const express=require("express");
const app=express();
const axios = require('axios');
const port =8000
app.get('/',(req,res)=>{
    res.send("<h1>hii</h1>")
})

app.get("/api/randomquote",async (req,res)=>{

    const options = {
        method: 'GET',
        url: 'https://random-quote-generator2.p.rapidapi.com/randomQuote',
        headers: {
          'X-RapidAPI-Key': '943dc3731fmsh2d651cf1fe5be79p111505jsn71351ad53a18',
          'X-RapidAPI-Host': 'random-quote-generator2.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
          const quote=response.data[0];
          console.log(quote)
          res.json({quote})
      } catch (error) {
          console.error(error);
          req.statusCode(500,"inter server error")
      }

})

app.listen(port,()=>{
    console.log(`app is listening on ${port}`)
})