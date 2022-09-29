	Please checkout pseudocode.HTML
Step1. Set up html and link everything
Step2 set up html elements in js
Step 3 get api info to populate html elements
Link bootstrap, axios, and weather api. (also style.css and main.js)
https://openweathermap.org/current
Use .createElement to add HTML tags
Link api using axios format
https://openweathermap.org/current for info

https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
Key = fe556d8602371420048f5a78bde5af9a



Data structure 

{
     "coord": {"lon": -122.08,"lat": 37.39},
     "weather": [
       {
         "id": 800,
         "main": "Clear",
         "description": "clear sky",
         "icon": "01d"
       }
     ],
     "base": "stations",
     "main": {
       "temp": 282.55,
       "feels_like": 281.86,
       "temp_min": 280.37,
       "temp_max": 284.26,
       "pressure": 1023,
       "humidity": 100
     },
     "visibility": 10000,
     "wind": {
       "speed": 1.5,
       "deg": 350
     },
     "clouds": {
       "all": 1
     },
     "dt": 1560350645,
     "sys": {
       "type": 1,
       "id": 5122,
       "message": 0.0139,
       "country": "US",
       "sunrise": 1560343627,
       "sunset": 1560396563
     },
     "timezone": -25200,
     "id": 420006353,
     "name": "Mountain View",
     "cod": 200
     }



Set up HTML elements using js .createElement
	Zip code field, submit button
	City row
	Temp row + 3 columns
	Condition row
	Other info (img)

Index.html structure
Html
	Head
	/head
		Body
			Div
			/div
		/body
/html
… thats really it

Checkout pseudocode.html for an idea of what JS will add



Functions
init() {    ←will only be ran if promise is fulfilled 
createZip()
createCard()
createCity()
createTemp()
createCond()
convertTemp()
createOther()
addImg()
cityAndCond()
}

buttonClick()
	Attached to button, takes ZIP entered and adds it to the URL being fetched.
	If promise is fulfilled run init
tempConvert()
	Take the K temp were given and run it through temp conversion equations with math.ceil
getData()
	Takes data from the api and applies it to the DOM

clear()
Simply does location.reload(). The same as refreshing the page
cityAndCond()
	Takes the city name, condition, and condition desc from the response.data and appends them to html

allCREATEfunctions()
Uses .createElement to make the elements
Uses .setattribute to set id, class, anything else
Uses insertAdjacentElement to add new element to html. This is nice because you can actually choose where exactly you want the element to go
Some will also set element .textContent to be info pulled from response.data

