# Weather Vision (PWA)

     A flexible responsive web app to check the weather details of current location as well as that of the different areas of all the cities in india,
     also check pollution status of different areas of diferent cities.
  
## Table of Contents

   -  Introduction
   - Project's aim
   -  How it works
   -  How to handle locally
   - Highlights
   - API's
   - Demo Version
    - External Service Dependencies
   -  Important Link
   -  screenShot's
   -  installation
   -  Icon
   - Architecture


## Introduction
  This is an usefull App for getting current weather detail's as well as past three weather histories of each city. It also help to know pollution detail's of different areas of different cities of india and detail's about component's of air pollution . 
 
## Project's aim
It Provides weather detail's of different places and pollution detail's of different area's of all the cities of india at same platform. Also allow user to add his places as bookmark.This App can also works in offline mode and can show you last viewed data's from API.

## How it works
The name if the app  'weather vision' indicates main idea , that is to allow user to check weather data of any city from allover India as well as user can check polltuion status of perticular area of any city in india. Also allows user to add any five places as bookmark for pollution details.this App can also works in offline mode and can show you last viewed data's from API.

  ##  How to handle locally
1. For weather detail's you can enter in weather detail component by clicking weather button from side navigation bar in desktop or in bottom navigation bar in device, there you can select place.On clicking on card of perticular city you will reach to weather detail's of that city,it is consist of consist of expansion pannel where you can find last three histories of that city with time of last visit.
2. For Pollution detail's you can enter in Pollution Detail component by clicking on Pollution Button from list, there you should select the state of city in whicht that area is located or you can directly enter into pollution details of perticular area if you have already bookmarked that area earlier. Otherwise you need to select city of that state and and finally select area of that selected city. this steps
will take you the place where you can have Pollution data of that place in card view. you can bookmark perticular areas of city by clicking on sign of bookmark given on card of area of city.
3. at pollution Detail component you can find Help button at top right corner which will help you to understand more about all the pollution elements, their sources of production and effect of that pollutants on human body.
  
## Highlights
- Use[ OpenWeatherMap](https://openweathermap.org/) API
- use [ government ] (https://api.data.gov/) API
- Use Material Design 2
- Dark Mode
- Support one language -English
- Use NGX Index Database
- Service Worker
    This project is built with Angular's Service-Worker:

        - Service-Workers only work in a production build, so to test, use 'ng build --prod' and run it on a HTTPS server. Example on firebase.
        - Manifest created for app to be installable + icons
        - Using SwUpdate service to show promt when app is opened and new version is available on server
        - Static files are cached, meaning the app works in offline mode

## API's:
  - [API for weather detail's for perticular city](https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=9ce2eb4084172fcd1a624bcf954f8222)
  - [API for Pollution detail's](https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69?api-key=579b464db66ec23bdd0000014603f9ebbec94dfd47badb0359240ce4&format=json&offset=0&limit=3734)
  - [API for current location weather detail's](https://api.openweathermap.org/data/2.5/onecall?lat=19.7514798&lon=75.7139&appid=9ce2eb4084172fcd1a624bcf954f8222)
## Demo Version
Deployment from the master branch - [myApp](https://project-bond-e6798.web.app)

## External Service Dependencies
-OAuth Social Authentication
   OAuth is used to get information from Facebook and Google accounts, that enables users to sign in with their respective credentials:
   1. Google 
   2. Facebook 
   3. sign in with Email and Password
## Important Links
- [ OpenWeatherMap](https://openweathermap.org/) 
- [firebase](firebase.com)
- [ngx-indexed-db](https://www.npmjs.com/package/ngx-indexed-db)

 ## installation
  Install node modules npm i
## screenShots
  ### Light Mode
  
  Desktop  Screen          |  Device Screen
:-------------------------:|:-------------------------:
![images (1)](https://user-images.githubusercontent.com/85214168/135258132-9b238c9e-a195-4f1b-96e4-1699bf6247cc.png)  | ![images (1)_3](https://user-images.githubusercontent.com/85214168/135257683-4e2e3186-7f76-4b74-9c79-1ef04a5a06d5.png)

  
  ### Dark Mode
  

  Desktop  Screent         |  Device Screen
:-------------------------:|:-------------------------:
![dsfjzg](https://user-images.githubusercontent.com/85214168/135260928-80bc17fc-cdb0-4759-8fa5-a4b65cee04f8.png) | ![fgd (1)](https://user-images.githubusercontent.com/85214168/135260998-bf5588b4-9784-4b12-95a9-0365358c8930.png)

## Ready to use with following libraries
  - flex-layout 12.0.0-beta.34
  - Angular material 12.2.0
  - ngx-indexed-db 6.1.2
## Icon
 ![maya](https://user-images.githubusercontent.com/85214168/135255436-c2298d3d-9d0b-4083-8a2a-6a52a61dc807.png)

