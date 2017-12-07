How to Run:
	cd into development/
	run <npm start>
	visit localhost:3000

Design Choices:
	The interface is basically wrapped in a flex box layout with components laid out in 3 respective areas including:
		1. Header
		2. Navigation Box
		3. Content Display Box
	I followed the design principles discussed in lecture adhering to principles such as:
		1. Use of professional font - I used Geometric, sans-serif
		2. Ensuring that the line height is greater than the point size of the font for the item <description> since it's multiline
		3. Limited characters to 50-90 per line
		4. There is a sharp contrast between images and text, making it easy to read
	The main component is App, which renders Body that is then responsible for setting the layout through css. Body then creates the navigation component, the header and the display component that shows the items. 
	The elements of the UI shrink and expand depending on the dimensions of the screen.
	
	Goal:

		The goal of the application is to help chefs buy ingredients (spices/vegetables). They can filter between the 2 and sort by name/price.