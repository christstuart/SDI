// variables

var theProffesional = "Cristiano Ronaldo";
var theTeam         = "\"Real Madrid\"";
var theGoals        =      193;
var theChampioship  =     true;
var yourOpinion;
var myBoolean;
var heKnows;
var myPele;
var hisGoals = 650;
var heSorry = "He doesn't want to talk about Soccer";
var hisTeam;

// outputs

console.log( " " + theProffesional + " is the best player in the world." + " \n He plays for " + theTeam + 
"\n He scored about" + " " + theGoals + " " + " goals in his life. " + "\n It is " + theChampioship + " that he was the best player in the world." );

// confirm

yourOpinion = confirm("Do you think Cristiano Ronaldo is the best? " + "\n Ok for Yes " + "\n Cancel for No");
  console.log("It is" + " " + yourOpinion + " that he likes " + theProffesional + "." );
 
if (yourOpinion === true) {
	heKnows = parseInt(prompt("How many goals has Ronaldo scored?", 193));
  if (heKnows === 193) {
		 console.log(hisGoals - theGoals + " Are the goals Cristiano need to equal Pele");
	 }	 
  else  {
	  console.log(heSorry)
 }
} else {
	hisTeam = prompt("You know what teams has Ronaldo played?", "Yes");
  if (hisTeam === "Yes" ) {
		console.log("These are all the team he has played before:" + " " + theTeam + "," + " Andorinha " + "," + " Nacional " + "," + " Sporting CP " + "," + " Manchester United "); 
  }
  else {
		console.log(heSorry);
	   } 	 
	 
} 

