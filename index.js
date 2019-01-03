function takeANumber(currentPos, name){
  var currentPosition = 0;
 if(currentPos === 0){
   currentPosition = 1;
 }else if(currentPos > 1){
   currentPosition == (currentPos + 1);
 }
  var welcomeMsg = "Welcome, " + name + ". You are number " + currentPosition + " in line.";
  
  return welcomeMsg;
}

function nowServing(){
  
}

function currentLine(){
  
}

