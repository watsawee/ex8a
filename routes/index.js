var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

function file_readline(fav_team){
	var cnt = 0;
const contents = fs.readFileSync('public\\input.txt', 'utf-8');
contents.split(/\r?\n/).forEach(line => {
console.log(`Line from file: ${line}`);
if(line == fav_team)cnt++;
});
	return cnt;
}

router.get('/wordcnt/:fav_team', function (req, res) {
  var fav_team = req.params.fav_team;
  var cnt = file_readline(fav_team);
  console.log('word connt -> '+cnt);
  res.send("word count API - "+fav_team);	
});

module.exports = router;
