// Benroll

module.exports = function(robot) {
  robot.hear(/help (me|us)/i, function(msg){
    msg.send("https://twitter.com/omgmog/status/608556664334233600");
  });
  robot.hear(/(palace|mind)/i, function(msg){
  	msg.send("[This is relevant to the conversation](http://www.bensmindpalace.co.uk/)");
  });
  robot.hear(/it's raining/i, function(msg){
  	msg.send("It's raining and @benfoxall is still wearing shorts.");
  });
  robot.hear(/Oh yeah!/i, function(msg){
  	msg.send("![](https://files.gitter.im/jsoxford/jsoxford.github.com/JSbn/Ben.gif)");
  });
};