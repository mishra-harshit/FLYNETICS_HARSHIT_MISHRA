# Project 
This project is built with Django and React.js and SQLite3(File already present in the repo) 

## Getting Started

## Backend
Follow the steps
### `cd backend`
### `pip install -r requirements.txt`
### `python manage.py runserver`

The server started at [http://localhost:8000](http://localhost:8000)

This turns on the backend, to test if we're getting the responses use the below command

### `curl --location --request GET 'http://127.0.0.1:8000/api/location?location=Bengaluru'`

you should get the gollowing response

### `{"name": "Bengaluru", "lattitude": 12.97, "longitude": 77.58, "description": "Bangalore  is the silicon valley of India"}`

## Frontend 

Change to frontend folder
### `cd frontend`
install dependencies
### `npm install`
start the application
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Once the Page is up Type any of the following in the search Menu Bengaluru,London,Delhi and click on the search Button
