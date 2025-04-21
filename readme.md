# ☁️ Build a Simple Weather App with JavaScript – Project Walkthrough

## 🚀 Project Overview

This project is a **simple yet elegant Weather App** built using HTML, CSS, and JavaScript. It fetches real-time weather data from the OpenWeatherMap API and displays temperature, humidity, and other weather details for any searched city.

It’s a great project for beginners looking to practice working with **APIs**, **asynchronous JavaScript (fetch)**, and **DOM manipulation** while building a visually appealing application.

---

### 🔗 GitHub Source Code: https://github.com/PoonamChauhan229/Weather-Widget-Js-Projects
### 🌐 Live Demo: https://poonamchauhan229.github.io/Weather-Widget-Js-Projects/

## 📁 Project Structure

```
To-Do-List-Js-Projects/
├── index.html       → Contains the structure and layout of the app.
├── style.css        → Provides styling for the to-do list.
└── script.js        → Contains JavaScript logic to handle tasks.
```

---

### `🔧 index.html – Layout and Structure`
### `<head> – Meta Information and Links`

```
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" />
    <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
    <link rel="stylesheet" href="./style.css">
    </head>
```
- <meta> tags define the character encoding, compatibility, and viewport for responsiveness.
- <title> sets the title of the webpage that appears in the browser tab.
- External Stylesheets: Includes FontAwesome for icons, Bootstrap for layout and styling, and a custom style.css for further styling.

---

### `<body> – Main Content Wrapper`

```
    <body>
    <div class="container2 container">
        <div class="cardtop" style="width: 18rem;">
```
- <body>: Contains the visible elements of the page.
- .container2 container: This wrapper class organizes the layout and ensures responsiveness.

---

### `.cardtop – Weather Input Form`
```
    <div class="card">
        <div class="card-header" style="text-align:center">
            Weather App
        </div>
        <div class="card-body cardtop">
            <input type="text" id='city' class="form-control" placeholder="Enter City"><br/>
            <div class="text-center">
            <button type="button" class="text-center btn btn-primary" onclick="getWeatherData()">Submit</button>
            </div>
        </div>
    </div>

```
- <div class="card">: A Bootstrap card that wraps the weather input form.
- <div class="card-header">: Displays the title of the app.
- <input>: A text input field for entering the city name to fetch weather data.
- <button>: A button that triggers the getWeatherData() function in JavaScript when clicked to fetch weather data.

---

### `.cardtop cardbottom – Display Weather Data`

```
<div class="card cardtop cardbottom">
  <div class="card-header" style="text-align:center">
    Weather Details
  </div>
  <div class="text-center">            
    <img class="image2 img-thumbnail" id="skyIcon">
  </div>
  <div class="card2 text-center">
    <span class="card-text" id="temp"></span><span id="celsius">°C</span>
    <p class="card-text" id="desc"></p>
    <p><i class="fa-solid fa-location-dot"></i><b class="card-text" id="loc"></b></p>

```    
- <div class="card">: Another Bootstrap card to display the fetched weather details.
- Weather Data Display: Elements like temperature (#temp), description (#desc), location (#loc), and an image (#skyIcon) will be dynamically updated with the weather data.

---

### `.lastcell – Additional Weather Information`

```
    <div class="lastcell" style="text-align:center">
        <div class="flex1">
            <div><i class="fa-solid fa-temperature-high"></i></div>
            <div class="flex">
            <div id="feelsLike"></div>
            <div>Feels Like</div>
            </div>
        </div>
        <div class="flex1">
            <div><i class="fa-solid fa-droplet"></i></div>
            <div class="flex">
            <div id="humidity"></div>
            <div>Humidity</div>
            </div>
        </div>                
    </div>
```
- .lastcell: A section that provides additional weather info such as "Feels Like" temperature and humidity.
- Icons: FontAwesome icons are used to represent the temperature and humidity.
- Data Display: The actual data for these attributes will be dynamically filled using JavaScript.

---

### `<script>` - JavaScript File

```
<script src="./script.js"></script>
```
- Loads the `script.js` where the logic to fetch weather data and update the DOM will be written..

---

### `🎨 style.css – Styling the Application`
GLOBAL RESET AND BOX MODEL
Resets default spacing and sets box-sizing to border-box so that padding and border are included in the element's total size.

```
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
```

---

### `BODY STYLING`
- Sets a background color of light blue for a refreshing appearance.
- Applies the 'Poppins' font family for a modern look.

```
    body {
        background-color: rgb(77, 185, 221);
        font-family: 'Poppins';
    }
```

---

### `DESCRIPTION STYLING`
- Applies a font size of 18px and capitalizes text for emphasis.

```
    #desc {
        font-size: 18px;
        text-transform: capitalize;
    }
```

---

### `ICON STYLING`
- Sets the location icon size to 22px for visibility.

```
    .fa-location-dot {
        font-size: 22px;
    }
```

---

### `FLEXIBLE LAYOUT`
- Styles a flex container with padding for spacing and borders for definition.

```
    .flex1 {
        border: 1px solid rgb(222, 215, 215);
        padding-left: 25px;
        padding-right: 25px;
        padding-top: 5px;
        padding-bottom: 5px;
    }
```

---

### `ICON COLOR AND SIZE`
- Increases the size of droplet and temperature icons, with a sky-blue color.

```
    .fa-droplet, .fa-temperature-high {
        font-size: 25px;
        margin-top: 15px;
        margin-right: 7px;
        color: lightskyblue;
    }
```

---

### `CARD HEADER`
- Sets the card header color to a light blue shade for prominence and makes it bold for emphasis.

```
    .card-header {
        color: rgb(109, 194, 247);
        font-weight: bold;
        font-size: 18px;
    }
```

---

### `CARD AND FLEX LAYOUT`
- Provides a container for the card, ensuring it stays aligned correctly within the page.

```
    .flex {
        /* background-color: yellow; */
    }
```

---

### LAST CELL STYLING
- Creates a background and flex layout for the last cell of the card for consistency in design.

```
    .lastcell {
        background-color: rgba(0, 0, 0, .03);
        display: flex;
        justify-content: start;
    }
```

---

### `CARD TOP STYLING`
- Adds padding and margin to position the card header appropriately.

```
    .cardtop {
        height: 10%;
        margin-left: 5%;
    }
```

---

### `CONTAINER LAYOUT`
- Uses flex display for both .container2 and .container to align content horizontally.

```
    .container2, .container {
        display: flex;
    }
```

---

### `CARD BOTTOM STYLING`
- Adds margin and padding to the bottom of the card for a better layout.

```
    .cardbottom {
        margin-top: 5%;
        margin-left: 10%;
        padding: 0;
    }
```

---

### `SHARE ICON STYLING`
- Increases the size of the share icon and adjusts its placement within the layout.

```
    .fa-share {
        font-size: 100px;
        margin-left: 250px;
    }
```

---

### `IMAGE STYLING`
- Centers and resizes images within the card for an aesthetically pleasing appearance.

```
    .img-thumbnail {
        border: none;
    }

    .img {
        width: 60%;
        height: 40%;
        margin-left: 70%;
        margin-top: 50%;
        padding: 20px;
    }
```

---

### IMAGE 2 STYLING
-Defines size and border-radius for a rounded image effect.

```
    .image2 {
        border: none;
        padding: 0.25rem;
        background-color: #fff;
        height: 150px;
        width: 150px;
        border-radius: 0.25rem;
        max-width: 100%;
        height: auto;
    }
```
---

### `FLEX 1 LAYOUT`
Configures flexbox behavior for better alignment of child elements.

```
    .flex1 {
        display: flex;
    }
```

---

### `CARD 2 STYLING`
Provides flex properties for the second card, ensuring it adapts to the available space.

```
    .card2 {
        flex: 1 1 auto;
    }
```

---

### `SKY ICON STYLING`
-Increases the font size for a bold representation of sky icons.

```
    .sky {
        font-size: 125px;
    }
```
---

### `TEMPERATURE DISPLAY`
- Makes the temperature and Celsius text bold and sets a larger font size for better readability.

```
    #celsius, #temp {
        font-size: 45px;
        font-weight: bold;
    }
```

---

### `PARAGRAPH STYLING`
- Removes bottom margins and padding from paragraphs for compact spacing.

```
    p {
        margin-bottom: 0;
        padding: 0;
    }
```

---

### `CONTAINER 2 PADDING`
- Adjusts padding to the left for better alignment of the container elements.

```
    .container2 {
        padding-left: 12%;
    }
```

---

### `☁️ script.js – Weather App Functionality`

### `let apikey = "***************************";`
- Stores the API key from OpenWeatherMap.
- Required to authenticate and access weather data.

### `async function getWeatherData(cityName)`
- Purpose: Fetches weather data for the given city and updates the UI.
- If cityName is not passed (null), it retrieves the city name from the input field with ID city.

```
if(cityName == null) {
  cityName = document.getElementById('city').value;
}
```

### `fetch(...)`
- Uses fetch() to send a GET request to OpenWeatherMap API.
- URL is dynamically built using the entered city name and API key.

```
await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`)
.then(res => res.json()).then(data => {...})
```
- Parses the JSON response.
- Extracts key data like:
- temp → Temperature in Kelvin.
- desc → Weather description.
- loc → City name.
- sky → Weather condition like “Clouds”, “Rain” etc.
- feelsLike, humidity, country → Additional weather info.

### `UI DOM Updates`
- Updates the HTML elements to reflect the current weather data.

```
skyIcon = document.querySelector("#skyIcon")
skyIcon.src = "./images/" + sky + ".gif"; // Dynamically sets weather image

document.querySelector("#desc").innerHTML = desc;
document.querySelector("#temp").innerHTML = Math.floor((temp - 273.15)); // Converts to °C
document.querySelector("#loc").innerHTML = loc + ", " + country;
document.querySelector("#feelsLike").innerHTML = Math.floor(feelsLike - 273.15) + "°C";
document.querySelector("#humidity").innerHTML = humidity + "%";
```
### `getWeatherData("Mumbai");`
- Immediately fetches the weather for Mumbai when the page loads.

---

### ✅ Summary of Functions

1. `getWeatherData(cityName)` – Fetches weather data from the API.
2. `renderWeather(data)` – Updates UI with fetched weather information.
3. `handleSearch()` – Captures city input and triggers data fetch.
4. `showError(message)` – Displays error message for invalid input or API issues.

---

### ✨ Features

| Feature               | Description                                               |
|------------------------|-----------------------------------------------------------|
| Search Weather         | Enter any city name to get current weather                |
| Dynamic Weather Icon   | Icon changes based on weather condition (e.g. Rain, Clouds)|
| Temperature Display    | Shows temperature in Celsius                              |
| Humidity Info          | Displays current humidity                                 |
| Feels Like Temp        | Gives the "feels like" temperature                        |
| Country & City Display | Displays both city and country of the searched location   |

---

### 🏁 Conclusion

This Weather App demonstrates how to interact with APIs, handle asynchronous JavaScript using `fetch()`, and dynamically update the DOM.

It’s a great starter project for developers looking to integrate external data and improve their frontend skills.

> 💻 [Check out the full project on GitHub](https://github.com/PoonamChauhan229/Weather-Widget-Js-Projects)

---
