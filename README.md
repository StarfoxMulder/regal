# Regal Theaters

This app was built using create-react-app.  The decision to use React was made in light of our conversdation on 3/23/2021.

## To start 

In your terminal, navigate to the directory where you have the app.  I suggest you first type "npm install" to make sure all dependencies are up to date.  Once the update has finished, type the command "npm run start" to start the application on localhost:3000 and have it open in a browser window.

## Notes

I initilly went with mapping over the MovieFeedEntries array, but I noticed that within the Media array the SubType "TV_SmallPosterImage" is not in the same location for each object.
There is likely a more efficient way of locating the "TV_SmallPosterImage" URL for each of the movie posters than my approach and I'm very interested in knowing what it is.  My approach of searching for the index of "TV_SmallPosterImage" and then using that position to find the Url value feels like it involves unnecessary steps into finding an associated key/value pair.