var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var fs = require('fs');
function file_reader(fav_team) {
  let cnt = 0;
  const contents = fs.readFileSync('public\\input.txt', 'utf-8');
  contents.spilt(/\r?\n/).forEach(line => {
    console.log(`Line from file: ${line}`);
    if (line == fav_team) cnt++;
  });

  return cnt;
};

router.get('/wordcnt/:fav_team', function(req, res) {
  let fav_team = req.params.fav_team;
  let cnt = file_reader(fav_team);
  let heading = "<h2>Word Count Result</h2>";
  let str1 = `Your favorite team -> ${fav_team}<br/>`;
  let str2 = `Number of occurrences -> ${cnt} <br/>`;
  res.send(heading + str1 + str2);
});

module.exports = router;
