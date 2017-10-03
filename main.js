//requiring BasicCard & ClozeCard Constructor Functions
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

//We need to use inquireer package so that we can prompt
var inquirer = require("inquirer");

//We need an array to hold 10 BasicCard or ClozeCard objects
var listOfCards = [];

//Function1 This will determine type of cards the user wants to insert.
function cardType()
{
	inquirer.prompt([
	{
		type: "list",
		name: "cardType",
		message: "Please select choice for card type",
		choices: ["BasicCard", "ClozeCard"]
	}

	]).then(function(card)
	{
		if(card.cardType === "BasicCard")
		{
			console.log("Please enter 10 Basic Cards");
			addBasicCard();
		}
		else
		{
			console.log("Please Enter 10 Cloze Cards")
			addClozeCard();
		}
	});
}

cardType();


//Function2 adds 10 BasicCard objects to our array(listOfCards)
function addBasicCard()
{
	if(listOfCards.length < 10)
	{
		inquirer.prompt([

		{
			name: "front",
			message: "Enter the question on the front side of card number: " + (listOfCards.length + 1) 
		},

		{
			name: "back",
			message: "Enter the anser on back of the card for card number: " + (listOfCards.length + 1)
		}

		]).then(function(basicCard)
		{

			//create BasicCard object
			var newCard = new BasicCard(basicCard.front, basicCard.back);

			//push the basicCard object onto aray
			listOfCards.push(newCard);

			//Display add message
			console.log("Basic card Added");

			//Recursive call wich will end when listOfCards.length == 10 to prevent infinite recursion
			addBasicCard();


		});
	}
	else
	{
		//Display front & back for each card
		for(var i = 0; i < listOfCards.length; i++)
		{
			//invoke displayCard function for each BasicCard object
			console.log(listOfCards[i].displayCard())
		}
	}
}

//Function 3 adds 10 ClozeCard objects to our array (listOfCards)
function addClozeCard()
{
	if(listOfCards.length < 10)
	{
		inquirer.prompt([

		{
			name: "full_text",
			message: "Enter the full text of the card that includes the answer for card number" + (listOfCards.length + 1) + ":"
		},

		{
			name: "cloze_text",
			message: "Enter the cloze text of card (EX: George Washington)" + (listOfCards.length + 1) + ":"
		}

		]).then(function(clozeCard)
		{

			//add full text & cloze text parameters to ClozeCard constructor & determine
			//if cloze is within full sentence. If TRUE push objects into array and add
			//the next card. IF FALSE don't push and return error msg & have user go 
			//throgh recursive method again reentering the same card number util correct
			//card is entered.
			var newCard = new ClozeCard(clozeCard.full_text, clozeCard.cloze_text);

			if(newCard.checkCloze() === true)
			{

				//push
				listOfCards.push(newCard);

				console.log(listOfCards.length);

				//display success add
				console.log("Cloze Card added");

				//recursion where listOfCards.legtth + 1 until array length = 10
				addClozeCard();

			}
			else
			{
				console.log("Please Try again! ");
				addClozeCard();
			}


		});
	}
	else
	{
		for(var i = 0; i < listOfCards.length; i++)
		{
			console.log(listOfCards[i].displayCard());
		}
	}
}