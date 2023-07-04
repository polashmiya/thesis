import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap';
import bg4 from "../assets/bg-4.jpg"
import bg1 from "../assets/bg-1.jpg"
import bg2 from "../assets/bg-2.jpg"
import bg3 from "../assets/bg-3.jpg"


const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel interval={2000} activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{height: "500px"}}
                    src={bg1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{height: "500px"}}
                    src={bg2}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{height: "500px"}}
                    src={bg3}
                    alt="First slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Banner