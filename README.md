# Flashcard-Generator

In this week's assignment, you will create the backend for a basic flashcard application.

The backend will essentially constitute an API that allows users to create two types of flashcards.


Basic flashcards, which have a front ("Who was the first president of the United States?"), and a back ("George Washington").
Cloze-Deleted flashcards, which present partial text ("... was the first president of the United States."), and the full text when the user requests it ("George Washington was the first president of the United States.")

A cloze deletion is simply a sentence that has had some of its text removed. For example, given the sentence:

"George Washington was the first president of the United States."

...We can create a "cloze deletion" by removing the words "George Washington":

"... was the first president of the United States."

This is useful for building flash card applications that forces users to remember the important part of a sentence, and is a common device in educational applications.

A flash card built this way has three parts:


The full text. This is the entire sentence users need to remember:  "George Washington was the first president of the United States."
The cloze deletion. This is the text we've chosen to remove: "George Washington".
The partial text. This is what we get if we remove the cloze deletion from the full text: "... was the first president of the United States.

We use **Inquirer** package to promp the user for input. In this case card data.


See below for examples as to how your constructor should behave.

For Clozed cards we use constructor for cloze card to pass in Full-text of card **fullText** and **cloze** to determine whether or not the user enters a valid cloze card.
**var isClozeInsideFullText = this.fullText.indexOf(this.cloze);** determines if valid.

If valid then replace answer with **...** using: **this.partialText = this.fullText.replace(cloze, "...");**

## Basic Card Selection
![Img1](https://github.com/tdsteph1/Flashcard-Generator/blob/master/images/img1.png)

## Enter Basic Card Questions
![Img2](https://github.com/tdsteph1/Flashcard-Generator/blob/master/images/img2.png)

## Basic Card results
![Img3](https://github.com/tdsteph1/Flashcard-Generator/blob/master/images/img3.png)

## Enter Cloze Card Questions
![Img4](https://github.com/tdsteph1/Flashcard-Generator/blob/master/images/img4.png)

## Cloze Card results
![Img5](https://github.com/tdsteph1/Flashcard-Generator/blob/master/images/img5.png)
