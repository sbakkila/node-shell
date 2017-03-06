var fs = require('fs');


module.exports = {
  pwd: function(cmd){
    process.stdout.write(process.env.PWD);
  },
  date: function(cmd){
    var date = new Date(Date.now()).toString();
    process.stdout.write(date);
  },
  ls: function(cmd){
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
    process.stdout.write("prompt > ");
    });
  },
  echo: function(str){
    process.stdout.write(str);
  },
  cat: function(filename){
    fs.readFile('./' + filename, 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  },
  head: function(filename){
    fs.readFile('./' + filename, 'utf8', (err, data) => {
      var strData = data.toString();

      if (err) throw err;
      var firstFive = strData.split("\n").slice(0,5).join("\n");

      console.log(firstFive);
    });

  },
  tail: function(filename){
    fs.readFile('./' + filename, 'utf8', (err, data) => {
      var strData = data.toString();

      if (err) throw err;
      var firstFive = strData.split("\n").slice(-5).join("\n");

      console.log(firstFive);
    });
  }

};
