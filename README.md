# Weather App Project

## Weather App Overview
This project is a frontend application that is designed to display the weather for any location. Weather App features a map using entered location and a dashboard containing the weather information. 

To test the application:
1. Type `npm install` to install dependencies -- ensure that node version is v16.14.0 or greater
2. Type `npm run start` to run application on localhost:3000

## Technologies
- Javascript
- React
- Sass


## Main Features

### Geocoding API

- the location typed into the search bar is sent as a request to this API with the response data containing geographic information such as latitude and longitude.
- the Geocoding API is able to infer or suggest locations from partial or slightly mispelled entries, but results to an error if there are no matches.
	
### Google Maps API

- the location returned by the Geocoding API updates the map with a marker and the boundaries set around it   
	
### Dashboard

- this is the area where the weather information is displayed with regards to the location confirmed by the Geocoding API
- it includes vital weather information such as the temperature, humidity percentage, wind speed, and even a brief description

![image](https://user-images.githubusercontent.com/86270564/200095031-58f3fbb7-6a5d-4b93-8783-4d5653208a22.png)



## Future Additions
- Handle Geocoding error for entries without a matching location
- Add weather indicators as markers on current city or nearby cities
- Add the ability to favorite cities -- once favorited, the information can be accessed easily
- Add option to enter coordinates as to reverse Geocoding API
- Add auto suggest locations as to prevent errors in entries

