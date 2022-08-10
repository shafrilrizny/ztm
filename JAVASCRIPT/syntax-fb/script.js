var database = [
	{
		username: "rizny",
		password: "pass"
	},
	{
		username: "amber",
		password: "small"
	},
	{
		username: "john",
		password: "depp"
	},
];

var newsFeed = [
	{
		username: "Megan Fox",
		timeline: "Transformer Rocks!"
	},

	{
		username: "Adriana Lima",
		timeline: "Angels"
	},

	{
		username: "Heidi Klum",
		timeline: "Angels Suxxx"
	}
];


var userNamePrompt = prompt("Gimme your name");
var passwordPrompt = prompt("Gimme your password");

function userValid (username, password) {
	for (var i=0; i < database.length; i++) {
		if (database[i].username === username && 
			database[i].password === password) {
			return true;
		} 
	}
	return false;
}

function signIn(username, password) {
	if (userValid (username, password)) {
		console.log(newsFeed);
	} else {
		alert("Wrong details biatch!");
	}
}

signIn (userNamePrompt, passwordPrompt);