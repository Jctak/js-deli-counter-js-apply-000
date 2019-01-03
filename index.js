function takeANumber(currentPos, name){
  this.print = function() {
    console.log(currentPos);
  };
  this.enqueue = function(element) {
    currentPos.push(element);
  };
  this.dequeue = function() {
    return currentPos.shift();
  };
  this.front = function() {
    return currentPos[0];
  };
  this.size = function() {
    return currentPos.length;
  };
  this.isEmpty = function() {
    return (currentPos.length === 0);
  };
  var welcomeMsg = "Welcome, " + name + ". You are number " + currentPos + " in line.";
  
  return welcomeMsg;
}

function nowServing(){
  
}

function currentLine(){
  
}

