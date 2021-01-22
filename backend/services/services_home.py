import bs4
import requests


def main(city):
    url = f'http://www.skaikairos.gr/main/{city}/position'
    res = requests.get(url)

    if res.status_code == 404:
        # In case of an error 404 return False to return then error.html
        return False
    else:
        soup = bs4.BeautifulSoup(res.text, 'html.parser')
        four_days_prediction = soup.find_all("div", {"class": "analytic-forecast-div"})
        prediction = dict()

        # It creates a dictionary with key names a, b, c, d...
        i = 'a'
        for day in four_days_prediction:
            # Loop through the array that holds the prediction for four days and save for each day
            # the date, temp, description, wind and the image in a dictionary

            date = day.find("strong", {"class": "upper-day-time"}).text
            description = day.find("span", {"class": "weather_description"}).text
            temperature = day.find("span", {"class": "upper-degrees"}).text
            wind = day.find("span", {"class": "upper-wind"}).text + "Μποφόρ"
            image = day.find("span", {"class": "top-img"})

            prediction[chr(ord(i))] = date
            prediction[chr(ord(i) + 1)] = description
            prediction[chr(ord(i) + 2)] = temperature
            prediction[chr(ord(i) + 3)] = wind
            prediction[chr(ord(i) + 4)] = 'https://www.skaikairos.gr' + image.img['src']

            i = chr(ord(i) + 5)

        response = prediction

    return response
