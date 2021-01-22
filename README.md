# Pydict Weather Full Stack

This application is the implementation of my previous application that collects and displays weather forecast data.
This time, I implemented a Full Stack Web APplication, using [Flask](https://flask.palletsprojects.com/en/1.1.x/) to create a Back End Server and [ReactJS](https://reactjs.org/) (and the library [Ant Design](https://ant.design/)) to create a Front End Server.

The weather data are being extracted using web scraping techniques.

## Instalation

### 1. Install Back End

- Change directory into backend folder

```
cd backend
```

- Create a virtual environment (Windows)

```
python -m venv venv
```

- Activate it

```
venv\Scripts\activate.bat
```

- Install the requirements

```
pip install -r requirements.txt
```

- Run the app

```
python app.py
```

### 2. Install Front End

- Install all the required packages

```
npm install
```

- Start the server

```
npm start
```

## Run it as a Docker container

Run the following command

```
docker-compose up
```

## Usage

Type http://localhost:3000/ in your browser to access the application. You can search for a greek city, written in greeklish to receive a weather forecast for four days.

## Disclaimer

I do not own the data that I scrap. The project is made for fun and to learn more about ReactJS.
