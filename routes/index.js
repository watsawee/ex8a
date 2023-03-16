var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var fs = require('fs');
function file_readline(fav_team){
  let cnt = 0;
  const contents = fs.readFileSync('public\\input.txt', 'utf-8');
  contents.split(/\r?\n/).forEach(line =>  {
    console.log(`Line from file: ${line}`);
  if(line == fav_team)cnt++;
  });
  return cnt;
}

router.get('/wordcnt/:fav_team', function(req, res) {
  let fav_team = req.params.fav_team;
  let cnt = file_readline(fav_team);
  let heading = "<h2>Word Count Result</h2>"
  let str1 = "Your favorite team -> <b>" + fav_team+"</b><b>";
  let str2 = "number of occurrences -> <b>" + cnt + "</b><b>"; 
  res.send(heading+str1+str2);
});

module.exports = router;

