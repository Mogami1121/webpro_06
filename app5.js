const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1:message1, greet2:message2});
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1:"Hello world", greet2:"Bon jour"});
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});

app.get("/luck", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';
  console.log( 'あなたの運勢は' + luck + 'です' );
  res.render( 'luck', {number:num, luck:luck} );
});

app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win );
  let total = Number( req.query.total );
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  let judgement = ''
  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else cpu = 'パー';
  // ここに勝敗の判定を入れる
  // 今はダミーで人間の勝ちにしておく
  // kokokara
  if(cpu=='グー' && hand=='パー'){
    judgement = '勝ち';
    win += 1;
    total += 1;
  }
  else if(cpu=='グー' && hand=='チョキ'){
    judgement = '負け';
    total += 1;
  }
  else if(cpu=='グー' && hand=='グー'){
    judgement = 'あいこ';
    total += 1;
  }
  else if(cpu=='パー' && hand=='パー'){
    judgement = 'あいこ';
    total += 1;
  }
  else if(cpu=='パー' && hand=='チョキ'){
    judgement = '勝ち';
    win += 1;
    total += 1;
  }
  else if(cpu=='パー' && hand=='グー'){
    judgement = '負け';
    total += 1;
  }
  else if(cpu=='チョキ' && hand=='パー'){
    judgement = '負け';
    total += 1;
  }
  else if(cpu=='チョキ' && hand=='チョキ'){
    judgement = 'あいこ';
    total += 1;
  }
  else if(cpu=='チョキ' && hand=='グー'){
    judgement = '勝ち';
    win += 1;
    total += 1;
  }
  // ここまで
  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'janken', display );
});
// 11/12 もっとまともにしました
app.get("/hoi", (req, res) => {
  const num = Math.floor( Math.random() * 4 + 1 );
  let enemy = '';
  let you = req.query.hand;
  let judge = '';
  if( num==1 ) enemy = '上';
  else if( num==2 ) enemy = '下';
  else if( num==3 ) enemy = '右';
  else if( num==4 ) enemy = '左';

  if( enemy==you ) judge = '負け'
  else judge = '勝ち'

  console.log( 'おまえは' + you + 'を向きました' );
  console.log( '相手は' + enemy + 'を指さしました');
  console.log( 'お前の' + judge + 'です');
  res.render( 'hoi', {you:you, enemy:enemy, judge:judge} );
});

app.get("/iqtest", (req, res) => {
  const num = Math.floor( Math.random() * 2 + 1 );
  let head = '';
  let iq = req.query.iq;
  if( num==1 ) sg = '良い';
  else if( num==2 ) sg = '悪い';
  console.log( 'おまえの頭は' + sg + 'です' );
  res.render( 'iqtest', {head:sg, iq:iq} );
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
