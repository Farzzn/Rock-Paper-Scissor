var items =["rock","paper","scissor"];
var n = 5;
var computerScore=0
var userScore=0

    var storedComputerScore = localStorage.getItem('computerScore');
    var storedUserScore = localStorage.getItem('userScore');

    // Check if there are stored values in local storage
    if (storedComputerScore !== null) {
    computerScore = parseInt(storedComputerScore);
    }

    if (storedUserScore !== null) {
    userScore = parseInt(storedUserScore);
    }


function dim(){
    document.getElementById("result").style.opacity = "0.7";
    document.getElementById("id2").style.opacity = "0.5";
    document.getElementById("id3").style.opacity = "0.5";
}

function reloadPage(){
    location.reload();

}

function resetValues() {
  computerScore = 0;
  userScore = 0;
  localStorage.setItem('computerScore', computerScore);
  localStorage.setItem('userScore', userScore);
  location.reload();}



//let n = prompt("Number of laps of play", "min 3");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
function UserTurn(CHOICE) {

    document.getElementById(CHOICE).style.borderColor = "red";
    document.getElementById("rock").style.visibility="visible";
    document.getElementById("paper").style.visibility="visible";
    document.getElementById("scissor").style.visibility="visible";

    ComputerTurn(CHOICE);

}

function ComputerTurn(userChoice){

         var random = getRandomInt(3);
         var option = items[random];
               
         id1 = setInterval(function () {
                if(document.getElementById("rock").style.borderColor == "red")
                    document.getElementById("rock").style.borderColor = "black";

                else    
                    document.getElementById("rock").style.borderColor ="red";
        }, 200);
                id2 = setInterval(function ()  {
                if(document.getElementById("paper").style.borderColor == "red")
                    document.getElementById("paper").style.borderColor = "black";

                else    
                    document.getElementById("paper").style.borderColor ="red";
        }, 400);
                id3 = setInterval(function ()  {
                if(document.getElementById("scissor").style.borderColor == "red")
                    document.getElementById("scissor").style.borderColor = "black";

                else    
                    document.getElementById("scissor").style.borderColor ="red";
        }, 600);
          
           // this start after 4 sec
            setTimeout(function () {
                clearInterval(id1);
                clearInterval(id2);
                clearInterval(id3);
                document.getElementById("rock").style.borderColor = "black";
                document.getElementById("paper").style.borderColor = "black";
                document.getElementById("scissor").style.borderColor = "black";
                document.getElementById("result").innerHTML = "MY CHOICE: "+ option;
                document.getElementById(option).style.borderColor ="red";
                
                if(option == "rock"){
                    if (userChoice == "Upaper"){ 
                        userScore++;
                        document.getElementById("result").innerHTML += "<br>YOUR PAPER COVERS MY ROCK <BR>HURRAYYY!!!! YOU WON. CONGRATSS <br> ";
                        document.getElementById("result").innerHTML += "..............<br>Computer Score: " + computerScore;
                        document.getElementById("result").innerHTML += "<br>User Score: " + userScore;
                        document.getElementById("but").style.visibility="visible";
                        dim();
                    }
                    if(userChoice == "Uscissor"){
                        computerScore++;
                        document.getElementById("result").innerHTML +=  "<br>MY ROCK BREAKS YOUR SCISSOR <BR> OOOPSS!!! YOU LOST.<br>";
                        document.getElementById("result").innerHTML += "..............<br>Computer Score: " + computerScore;
                        document.getElementById("result").innerHTML += "<br>User Score: " + userScore;
                        document.getElementById("but").style.visibility="visible";
                        dim();
                    } 
                    if(userChoice == "Urock"){
                        document.getElementById("result").innerHTML += "<br>SAME CHOICE!!!! <br>";
                        document.getElementById("result").innerHTML += "..............<br>Computer Score: " + computerScore;
                        document.getElementById("result").innerHTML += "<br>User Score: " + userScore;
                        document.getElementById("but").style.visibility="visible";
                        dim();
                    }
                }    
                       
                if(option == "paper"){
                        if (userChoice == "Urock") {
                            computerScore++;
                            document.getElementById("result").innerHTML += "<br>MY PAPER COVERS YOUR ROCK <BR>OOOPSS!!! YOU LOST<br>";
                            document.getElementById("result").innerHTML += ".............<br>Computer Score: " + computerScore;
                            document.getElementById("result").innerHTML += "<br>User Score: " + userScore;
                            document.getElementById("but").style.visibility="visible";
                            dim();
                        }
                        if(userChoice == "Uscissor"){
                            userScore++;
                            document.getElementById("result").innerHTML +=  "<br>YOUR SCISSOR TEAR OFF MY PAPER <BR> HURRAYYY!!!! YOU WON. CONGRATSS<br>";
                             document.getElementById("result").innerHTML += ".............<br>Computer Score: " + computerScore;
                            document.getElementById("result").innerHTML += "<br>User Score: " + userScore;
                            document.getElementById("but").style.visibility="visible";
                            dim();
                      }  
                        if(userChoice == "Upaper"){
                             document.getElementById("result").innerHTML += "<br>SAME CHOICE!!!! <br>";
                            document.getElementById("result").innerHTML += ".............<br>Computer Score: " + computerScore;
                                document.getElementById("result").innerHTML += "<br>User Score: " + userScore;
                             document.getElementById("but").style.visibility="visible";
                             dim();
                            }
                    }

                if(option == "scissor"){
                        if (userChoice == "Urock") {
                            userScore++;
                            document.getElementById("result").innerHTML += "<br>YOUR ROCK BREAKS MY SCISSOR<BR>HURRAYYY!!!! YOU WON. CONGRATSS<br>";
                            document.getElementById("result").innerHTML += ".............<br>Computer Score: " + computerScore;
                            document.getElementById("result").innerHTML += "<br>User Score: " + userScore;
                            document.getElementById("but").style.visibility="visible";
                            dim();
                        }    
                        if(userChoice == "Upaper"){
                            computerScore++;
                            document.getElementById("result").innerHTML +=  "<br>MY SCISSOR TEAR OFF YOUR PAPER <BR> OOOPSS!!! YOU LOST<br>";
                            document.getElementById("result").innerHTML += "..............<br>Computer Score: " + computerScore;
                            document.getElementById("result").innerHTML += "<br>User Score: " + userScore;
                            document.getElementById("but").style.visibility="visible";
                            dim();
                            
                        }

                        if(userChoice == "Uscissor"){
                             document.getElementById("result").innerHTML += "<br>SAME CHOICE!!!! <br>";
                            document.getElementById("result").innerHTML += "..............<br>Computer Score: " + computerScore;
                            document.getElementById("result").innerHTML += "<br>User Score: " + userScore;
                             document.getElementById("but").style.visibility="visible";
                             dim();
                            }
                    }

                    // Storing the variables in local storage
                    localStorage.setItem('computerScore', computerScore);
                    localStorage.setItem('userScore', userScore);
                        
            }, 4000); 
             
    } 
