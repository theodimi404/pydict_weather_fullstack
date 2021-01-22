import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const PredictionCard = (props) => {  
  return(
    <Card
      hoverable
      style={{ width: 300 }}
      cover={<img alt="example" src={props.img} />}
    >
      <Meta title={props.day} />
      <div>
        <h3>{props.prediction}</h3>
        <p>Θερμοκρασία: {props.temperature}</p>
        <p>{props.wind}</p>
      </div>
    </Card>)
};

export default PredictionCard;