# Regal Theaters

This app was built using create-react-app.  The decision to use React was made in light of our conversdation on 3/23/2021.

## To start 

In your terminal, navigate to the directory where you have the app.  I suggest you first type "npm install" to make sure all dependencies are up to date.  Once the update has finished, type the command "npm run start" to start the application on localhost:3000 and have it open in a browser window.

## Notes

I initilly went with mapping over the MovieFeedEntries array, but I noticed that within the Media array the SubType "TV_SmallPosterImage" is not in the same location for each object.
There is likely a more efficient way of locating the "TV_SmallPosterImage" URL for each of the movie posters than my approach and I'm very interested in knowing what it is.  My approach of searching for the index of "TV_SmallPosterImage" and then using that position to find the Url value feels like it involves unnecessary steps into finding an associated key/value pair.

In the Header.js and Header.css files you will see commented-out lines regarding a div using the logo as a background-image.  I was attempting to do what I thought this line from the instructions was asking for:
"Logo in header should float 16px to the right of the start of a centered 1024px header section when screen is larger than 1024px wide."
I'm not sure I understand what is being asked for and I'll come back to it at the end since it seems like overall functionality is desired above styling.

Glad I came back to that requirement after I finished the other functionality.  You were asking for the logo to be 16px off-center to the right when the viewport is wider than 1024px, correct?  Sorry if I'm still misinterpreting that line of instruction.