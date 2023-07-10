const express = require('express')
const app = express()
const port = 3000

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.post('/rectangle_POST', function (req, res) {
  var chieudai = req.body.chieudai;
  var chieurong = req.body.chieurong;

  var chuvi = (chieudai + chieurong) * 2;
  var dientich = chieudai * chieurong;

  let kq = `Chu vi: ${chuvi} , dien tich: ${dientich}`;

  res.send(kq);
});



app.get('/', (req, res) => {
  res.send('CP17301 - Android Networking')
});



app.get("/get_data", async (request, response) => {
  response.send(`{
        "albumId": 96,
        "id": 4780,
        "title": "100 bai hat hay nhat",
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

