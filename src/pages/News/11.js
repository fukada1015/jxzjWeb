// app.get('/getnews',(req,res)=>{
//   let mytype = req.query.mytype
//   let connectiong = mysql.createConnection(myconfig)
//   connectiong.connect()
//   connectiong.query('select * from news where id = '+mytype,function(err,rows,fields){//执行sql语句
//     if(err) throw err ;
//     res.send(rows);
//   });
// })
