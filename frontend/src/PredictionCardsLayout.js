import React from 'react';
import { Space, Row, Col } from 'antd';
import PredictionCard from './PredictionCard'


const PredictionCardsLayout = (searchResults) => {
    console.log(searchResults)
    return(
        <Space>
            <Row gutter={16}>
                <Col span={6}>
                    <PredictionCard
                        img={searchResults.searchResults.e} 
                        day={searchResults.searchResults.a}
                        prediction={searchResults.searchResults.b}
                        temperature={searchResults.searchResults.c}
                        wind={searchResults.searchResults.d}
                    />
                </Col>

                <Col span={6}>
                    <PredictionCard
                        img={searchResults.searchResults.j} 
                        day={searchResults.searchResults.f}
                        prediction={searchResults.searchResults.g}
                        temperature={searchResults.searchResults.h}
                        wind={searchResults.searchResults.i}
                    />
                </Col>

                <Col span={6}>
                    <PredictionCard
                        img={searchResults.searchResults.o} 
                        day={searchResults.searchResults.k}
                        prediction={searchResults.searchResults.l}
                        temperature={searchResults.searchResults.m}
                        wind={searchResults.searchResults.n}
                    />
                </Col>

                <Col span={6}>
                    <PredictionCard
                        img={searchResults.searchResults.t} 
                        day={searchResults.searchResults.p}
                        prediction={searchResults.searchResults.q}
                        temperature={searchResults.searchResults.r}
                        wind={searchResults.searchResults.s}
                    />
                </Col>
            </Row>
        </Space>
    )
};

export default PredictionCardsLayout