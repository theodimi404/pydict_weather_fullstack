import React, { useState } from 'react';
import { Input, Space, Form, Row, Col, Typography, Button } from 'antd';
import './App.css';
import PredictionCardsLayout from './PredictionCardsLayout'

const { Title } = Typography;

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

  const updateCity = (e) => {
    setCity(e.target.value);
  };
  
  const onSearch = async (e) => {
    e.preventDefault();
    if (city == "") {
      alert("Please fill in all fields");
      return false;
    };
    const response = await seacrhCity(city);
    setSearchResults(response);
    setShow(true);
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

      {show && ( <PredictionCardsLayout searchResults={searchResults} /> )}
    </div>
  )
};

export default Home;