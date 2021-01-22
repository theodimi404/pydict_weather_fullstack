FROM python:3.6.1-alpine
WORKDIR /project/backend
ADD . /project/backend
RUN pip install -r requirements.txt
CMD ["python", "app.py"]