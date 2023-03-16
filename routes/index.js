var express = require('express');
var router = express.Router();

/* GET home page. */
var fs = require('fs');
function file_readline(fav_team)
{ let cnt =0;
    const contents = fs.readFileSync('public\\input.txt', 'utf-8');

  contents.split(/\r?\n/).forEach(line =>  {
    console.log(`Line from file: ${line}`);
  });
}

router.get('/wordcnt/:fav_team', function(req, res) {
  let fav_team =req.params.fav_team
  let cnt =file_readline(fav_team)
  let heading = "<h2>Word count result/h2>";
  let str1 ="your favorite team -> <b>"+fav_team+"</b><br>";
  let str2 ="Number of occurrences -> <b>"+cnt+"</b><br>";
  res.send(heading+str1+str2);
});

module.exports = router;
