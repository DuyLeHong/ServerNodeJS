const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('CP17301 - Android Networking')
});

app.get("/get_data", async (request, response) => {
    response.send(`{
        "albumId": 96,
        "id": 4780,
        "title": "delectus quis reprehenderit ut",
        "url": "https://via.placeholder.com/600/fef7a0",
        "thumbnailUrl": "https://via.placeholder.com/150/fef7a0"
      }`);
  
});


app.get("/add_data", async (request, response) => {

  console.log(request.body);

  
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

