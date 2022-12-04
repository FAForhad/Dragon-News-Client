import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brend1 from '../../../assests/Brand1.png'
import Brend2 from '../../../assests/Brand2.png'


const BrendCarusole = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Brend1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Brend2}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BrendCarusole;