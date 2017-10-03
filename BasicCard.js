//Constructor function for creating BasicCard object
var BasicCard = function(front, back)
{
	//Create properties or instance variables
	this.front = front;	//who was the 1rst president of U.S.
	this.back = back;   //George Washington

	//function1(check answers)
	this.checkAnser = function(choice)
	{
		if(choice === this.back)
		{
			return true;
		}
		else
		{
			return false;
		}
	},

	//function2(dispay Front & Back flashcard)
	this.displayCard = function()
	{
		console.log("-------------------------------------------Front-------------------------------------------");
		console.log("\t \t " + this.front);
		console.log("-------------------------------------------Back--------------------------------------------");
		console.log("\t \t " + this.back);
		console.log("-------------------------------------------------------------------------------------------\n \n");

		return "";
	}
}

//Exporting our BasicCard constructor so that main.js can use it
module.exports = BasicCard;