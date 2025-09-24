WeatherNow

WeatherNow is a lightweight, responsive React application that allows users to check current weather conditions for any city quickly and easily. Designed for outdoor enthusiasts like Jamie, the app focuses on a clean, user-friendly interface with instant weather information.

Features

Search for any city and view its current weather.

Displays temperature, weather condition, icon, city name, and wind speed.

Responsive design for desktop and mobile screens.

Light and dark theme toggle.

Graceful error handling for invalid city names or network issues.

Tech Stack

Frontend: React

Styling: CSS (custom, responsive design)

API: Open-Meteo (public, no API key required)

State Management: React useState & custom hooks

Folder Structure

WeatherNow/

frontend/

src/

components/ (SearchBar, WeatherCard, ErrorMessage)

hooks/ (useWeather.js)

styles/ (CSS files for components)

App.js

index.js

package.json

README.md

Installation

Clone the repository.

Navigate to the frontend folder.

Install dependencies with npm install.

Start the development server with npm start.
The app will open in your default browser at http://localhost:3000
.

Usage

Enter the name of a city in the search bar.

Click Search or press Enter.

View the current weather:

Temperature (°C)

Weather condition and icon

City name

Wind speed

Toggle light/dark mode using the button in the header.

Click the WeatherNow logo to reset the app.

Color Theme & Responsiveness

Light Mode: white backgrounds with black text, sky-blue search button, soft shadows for cards.

Dark Mode: dark slate backgrounds with white text, indigo search button, consistent contrast for readability.

Fully responsive across all devices:

Ultra-small screens (<370px) stack input/button and card content vertically.

Small to mid-mobile screens (371–480px) slightly reduce font sizes and adjust padding for readability.

Larger screens maintain horizontal layout with bigger fonts and icons.

Notes

No backend is required because the Open-Meteo API is public and does not require authentication.

All API calls are made directly from the frontend.

The app is optimized for simplicity, performance, and a quick, clean user experience.

Notes for Evaluators

Project Purpose: WeatherNow is designed to provide quick, real-time weather information for any city with a clean and responsive interface, tailored for users like outdoor enthusiasts.

Code Structure:

Components: SearchBar, WeatherCard, ErrorMessage.

Hook: useWeather handles API fetching and weather code mapping.

Styles: Organized per component in the styles folder.

App.js (Home) manages theme toggle, layout, and state integration.

Key Features / Notes:

Public API: Uses Open-Meteo, no authentication required.

Error Handling: Displays friendly messages for invalid city names or network failures.

Theme Support: Light/dark modes with consistent styling.

Responsiveness: Layouts adapt for ultra-small (<370px), small (370–480px), and larger screens.

Weather Code Mapping: Icons and labels for the most common weather conditions are included.

Limitations / Assumptions:

No backend is included since the API is public.

State resets on full page reload (logo click).

Only current weather is displayed; forecasts are not implemented.

Testing / Usage Notes:

Tested for various city inputs including invalid names.

Works on desktop and mobile browsers.

Light/dark mode toggle preserves readability across components.

License :

This project is open-source and free to use under the MIT License.