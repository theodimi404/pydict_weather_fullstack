import React, { useState } from 'react';
import { Input, Space, Form, Row, Col, Typography, Button } from 'antd';
import './App.css';
import PredictionCardsLayout from './PredictionCardsLayout'

const { Title } = Typography;

// The function that POSTS into the flask server and returns the prediction
async function seacrhCity(city) {
  const data = {
    "City": city
  }
  try {
    const fetched_data = await fetch(
      'http://127.0.0.1:5000/home/'
      , 
      {
        method: 'POST',
        body: JSON.stringify(data)
      }
    );
    const prediction_data = await fetched_data.json();
    return prediction_data;
  } catch (error) {
    console.log(error);
  }
}

const Home = () => {
  const [show, setShow] = useState(false);
  const [city, setCity] = useState("");
  const [searchResults, setSearchResults] = useState("");

  // Updates the value that the user types in the input form
  const updateCity = (e) => {
    setCity(e.target.value);
  };
  
  // OnClick the function will call the function that POSTS into the flask server 
  // And it will make sure that the user will type the city's name correctly
  const onSearch = async (e) => {
    e.preventDefault();
    if (city === "") {
      alert("Please fill in all fields");
      return false;
    };
    const response = await seacrhCity(city);
    setSearchResults(response);
    if (response){
      setShow(true);
    } else {
      alert("Please type the name of the city correctly!");
      setShow(false);
    }
    
  };

  return(
    <div className="App">
      <Row>
        <Col span={12} offset={6}>
          <Title level={3}>Search for a city</Title>
        </Col>
      </Row>

      <Row>
        <Col span={12} offset={6}>
          <Space>
            <Form>
              <Form.Item
                label="City"
                name="City"      
                onChange={updateCity}
                value={city}
              >
                <Input placeholder="Search for a city"/>
              </Form.Item>
            </Form>
          </Space>
        </Col>
      </Row>

      <Row>
        <Col span={12} offset={6}>
          <Button type="primary" onClick={onSearch}>Search</Button>
        </Col>
      </Row>

      <br></br>
      {/* variable show exists to make sure that if the user mispells a city, nothing will appear as a result */}
      {/* eitherwise all four cards appear with broken image links*/}
      {show && ( <PredictionCardsLayout searchResults={searchResults} /> )}
    </div>
  )
};

export default Home;