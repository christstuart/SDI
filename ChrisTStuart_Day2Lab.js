/* Chris T Stuart
       SDI
    Day 2 Lab
*/
    

// variables

var myName;
var myOpinion = true;
var myDecision;
var mySport;
var myPlay;
var myGoals = 193;
var myMind;
var yourGoals;
var myGoalstoEqual;

// prompt asking for name
var myName = prompt(" Hey You, What's Your Name ");

// console log of his name
console.log( " His name is " + myName + "?");

// we have variable myMale asking if he likes sport using variable myOpinion as true for the confirm
myDecision = confirm( " It is " + myOpinion + " that you like sport? \n Ok for Yes \n Cancel for No "  );

// console log of his decision of wether he likes sport or not
console.log(" It is " + myDecision + " that he likes sport " );

// where variable mySport prompts a question of what sport he likes
var mySport = prompt(" What kind of sport you like? ", "");

// console log of his sport
console.log( " He likes "  + mySport );

// alert to tell him I like his sport to
alert(" Thats Great!! " + myName + " I love " + mySport + " to " + "." );

// myPlay ask if he plays mySport
myPlay = confirm(" Do you play " + mySport + "?" + " \n Ok for Yes  " + " \n Cancel for No " );

// console log of myPlay 
console.log( " It's " + myPlay + " that he plays " + mySport );

// prompt of how many goals Cristiano Ronaldo has score
myMind = prompt( " Do you know how many goals Cristano Ronaldo has score? ");
console.log( myMind );

// alerts you about his goals 
alert(" He scored about " + myGoals);
alert(" Now I'm going to see how many goals you need to equal Cristiano Ronaldo ");

// ask you how many goals have you scored and gives you the amount you need
yourGoals = prompt( " How many goals have your scored? " );
console.log(" So if you have scored " + yourGoals + " you need ");
console.log( myGoals - yourGoals);





