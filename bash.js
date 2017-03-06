var command = require('./command.js');
// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  if(cmd === 'pwd'){
    command.pwd(cmd);

  }
  if(cmd === "date"){
    command.date(cmd);
  }
  if (cmd === "ls") {
    command.ls(cmd);
  }
  if (cmd.slice(0, 4) === "echo"){
    command.echo(cmd.slice(4));
  }
  if(cmd.slice(0, 3) === 'cat'){
    command.cat(cmd.slice(4));
  }
  if(cmd.slice(0, 4) === 'head'){
    command.head(cmd.slice(5));
  }
  if(cmd.slice(0, 4) === 'tail'){
    command.tail(cmd.slice(5));
  }
  process.stdout.write('\nprompt > ');

});
