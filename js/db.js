const express = require('express'); // express 임포트
const app = express(); // app생성
const port = 5000;

app.get('/', function (req, res) {
  res.send('hello world!!');
});

app.listen(port, () => console.log(`${port}포트입니다.`));

// 몽구스 연결
function dbConn(){
  const mongoose = require('mongoose');
  mongoose
    .connect(
      'mongodb+srv://root:1234@test.hwaugm3.mongodb.net/?retryWrites=true&w=majority',
      {
        // useNewUrlPaser: true,
        // useUnifiedTofology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
      }
    )
    .then(() => alert("MongoDB Connect"))
    .catch((err) => {
      alert(err);
    });
}