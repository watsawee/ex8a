var express = require('express');
var fs = require("fs");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

function file_readline(fav_team){
  let count = 0;
  const contents = fs.readFileSync('public\\input.txt', 'utf-8');
  contents.split(/\r?\n/).forEach(line =>  {
    console.log(`Line from file: ${line}`);
    if (line == fav_team) count++;
  });
  return count;
}

router.get('/wordcnt/:fav_team', function(req, res) {
  let fav_team = req.params.fav_team;
  let count = file_readline(fav_team);
  res.send("word count API - " + fav_team + "( " + count + " )");
});

module.exports = router;
