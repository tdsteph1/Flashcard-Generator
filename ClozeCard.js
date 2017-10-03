//Constructor function for creating ClozeCard object
var ClozeCard = function(fullText, cloze)
{
	//create properties or instance variables
	this.fullText = fullText;	//George Washington was the first president of U.S.
	this.cloze = cloze;			//George Washington
	this.partialText = "";		//... was the first president of the U.S.

	//Function1(check to see cloze is within (fullText) then combine if true)
	this.checkCloze = function()
	{
		//use indexOf to determine if (cloze exist in (fullText) if Not returns -1(does not exist)
		var isClozeInsideFullText = this.fullText.indexOf(this.cloze);

		if(isClozeInsideFullText != -1)
		{
			//cloze is within the text so now we must replace cloze term
			//inside (fullText) with (...) to mask the answer then store
			//partial text inside partialText property
			this.partialText = this.fullText.replace(cloze, "...");		//... was first president of U.S.

			return true
		}
		else
		{
			return false;
		}
	}

	//Function2(check answer if user plays game)
	this.checkAnser = function(choice)
	{
		if(choice === this.cloze)
		{
			return true;
		}
		else
		{
			console.log("ERROR " + this.cloze + " doesn't appear in " + this.fullText);
			return false;
		}
	}

	//Function 3
	this.displayCard = function()
	{
		console.log("--------------------------------------------Partial-------------------------------------------------");
		console.log(this.partialText);
		console.log("--------------------------------------------Cloze---------------------------------------------------");
		console.log(this.cloze);
		console.log("---------------------------------------------------------------------------------------------------- \n \n");

		return "";
	}

}

module.exports = ClozeCard;