function takeANumber(currentPos, name){
  this.print = function(){
    console.log(currentPos);
  };
  this.enqueue = function(element){
    collection.push(element);
  };
  
  var welcomeMsg = "Welcome, " + name + ". You are number " + currentPos + " in line.";
  
  return welcomeMsg;
}

function nowServing(){
  
}

function currentLine(){
  
}

