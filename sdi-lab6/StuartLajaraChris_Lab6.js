var myTeams = function() {
	var theTeams = [" Real Madrid"," FC Barcelona", " Atletico Madrid", " Valencia CF"];
	var theTeamsPlace = [" Madrid.", " Barcelona.", " Madrid.", " Valencia."];
for (var i = 0; i < theTeams.length; i++) {
	console.log(theTeams[i] + " plays in" + theTeamsPlace[i]);
	
}
theTeams.push(" Sevilla FC");
theTeamsPlace.push(" Seville.");
	console.log(theTeams);
	console.log(theTeamsPlace);
theTeams.reverse();
theTeamsPlace.reverse();
 	console.log(theTeams);
 	console.log(theTeamsPlace);
	
};

myTeams();