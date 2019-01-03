function takeANumber(currentPos, name){
  katzDeliLine = [];
  this.print = function() {
    console.log(katzDeliLine);
  };
  this.enqueue = function(element) {
    katzDeliLine.push(element);
  };
  this.dequeue = function() {
    return katzDeliLine.shift();
  };
  this.front = function() {
    return katzDeliLine[0];
  };
  this.size = function() {
    return katzDeliLine.length;
  };
  this.isEmpty = function() {
    return (katzDeliLine.length === 0);
  };
  var welcomeMsg = "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
  
  return welcomeMsg;
}

function nowServing(){
  
}

function currentLine(){
  
}

