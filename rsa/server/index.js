const express = require('express');
const bodyParser = require('body-parser')
const NodeRSA = require('node-rsa');
// const CryptoJS = require('crypto-js')
const app = express();


const cors = require('cors')
const { port, privateKey } = require('./config') 

const decrypt = function(txt) {
  const privateRsa = new NodeRSA(privateKey);
  privateRsa.setOptions({ encryptionScheme: 'pkcs1'});
  return privateRsa.decrypt(txt, 'utf8');
}


app.use(cors());
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) 


// 接收用户名和密码
app.post('/user/login', async function (req, res) {
  console.log('params---', req.body);
  const { password } = req.body;
  const data = decrypt(password);
  
  res.send({
    code: 0,
    data,
  });
})

app.listen(port, function(){
  console.log(`端口：${port}监听中`);
})