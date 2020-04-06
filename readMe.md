
																		Mushroom Hunter
	
	This is a simple game which uses vanilla javascript as well as some external images and sounds. It relies heavily on javascript’s ‘mouseenter’ and ‘mouseleave’ events to drive the interactive experience. Hopefully the alternating light and dark color of the squares in the playing area creates a flashlight kind of look. 

	Gameplay:

	To begin play simply click on the button labeled ‘click here to get your flashlight and enter the mine’. The game area shows and the yellow ‘circle’ of the flashlight beam appears. Carefully search for the mushroom, and click on it. Each mushroom gives you one point. Clicking the mushroom ends the level. Click on the button labeled ‘click here to continue’ to go to the next level.

	Starting at the second level a rat is randomly placed in the game area. Each level after the second adds one more rat. There’s also a pause programmed into the game when you scroll over the rats. As you progress in levels the pause decreases until it’s roughly 1/5 of a second. If you let your ‘flashlight’ linger too long on the rats they’ll attack you and take a hit point. You only have 10 hit points, so be wary.


	Built With:
	HTML
	CSS
	Javascript

	Process:

	Monday, March 30th
	I began the initial HTML layout of the page with the game play area, and rough sizing of the grid squares. Then I saved each game square DOM element to a variable, then created the game squares array. I also created the javascript code for the 'flashlight' effect. Lastly I created the button to start the game.

	Tuesday, March 31st
	I wrote the code for the creation and placement of the mushroom and rat elements. Initially I used the Math.random method from inside both functions. I searched onling and found the initial images for the mushroom and the rat elements.  

	Wednesday, April 1st
	I wrote the HTML for the transition screen between each level. Then I placed the button to continue the game onto the next level. Next I consolidated the duplicate code for randomizing the placement of the mushroom and rats into a seperate function. Lastly I wrote the HTML for the end of game screen. 

	Thursday, April 2nd
	I created the button on the end of game screen to play the game again. Then I wrote the javascript code to get the player's initials, record the score into local storage, and then generate a table of the top ten scores with initials. Lastly I Began addressing appearance and styling with CSS.

	Friday, April 3rd
	The game was playable by this point with no bugs. Following playertester feedback, I began improving game play by writing code to create a delay in the rats 'attack' function. The length of delay is set by the variable delay. I added code to decrease the delay by 50 milliseconds with each subsequent level. Lastly I found additional images for the rat elements and incorporated them into the game with an else if chain. 

	Ideas for Further Improvement:
	* Creating movement in the rats within the levels beyond a certain level by changing which squares the event listeners are placed on.
	* Adding other objects within the game i.e. poisonous mushrooms which take healthpoints, some other animal which would be harmless, squirrels which steal your 
	mushrooms 


	Author:
	Guy Jones - Developer

	Acknowledgements:

	The SEI-30 Instructional team, for their patience and perserverance.

	My classmates for their support and assistance

	Images and sounds requiring credit are noted by links on the game page
	Cave ambience courtesy of zapsplat.com
	Wooden boards background images courtesy of Pawel Czerwinski on unsplash.com