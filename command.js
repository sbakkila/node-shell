var fs = require('fs');

module.exports = {
  pwd: function(){
    process.stdout.write(process.env.PWD);
  },
  date: function(){
    var date = new Date(Date.now()).toString();
    process.stdout.write(date);
  },
  ls: function(){
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
    process.stdout.write("prompt > ");
    });
  }

};
