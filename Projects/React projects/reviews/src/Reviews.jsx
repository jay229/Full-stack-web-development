import React, { useState } from 'react';
import Data from "./Data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

function Reviews() {
    const [index, setindex] = useState(0)
    const { name, job, image, text } = Data[index]
    const checknumber = (number) => {
        if (number < 0) {
            return Data.length - 1
        }
        if (number > Data.length - 1) {
            return 0;
        }
        return number;
    }
    const nextData = () => {

        setindex((index) => {
            let newIndex = index + 1;
            return checknumber(newIndex);
        })
    }
    const prevData = () => {
        setindex((index) => {
            let newIndex = index - 1;
            return checknumber(newIndex);
        })
    }

    return (
        <div className="review-data">
            <div className="image">
                <span className="symbol">

                    <FaQuoteRight className="faQ" />
                </span>
                <img src={image} alt="" />
            </div>
            <div className="name">

                <h2>{name}</h2>
                <h3>{job}</h3>
                {/* <h1>{id} </h1> */}
            </div>
            <div className="para">

                <p>{text}</p>
            </div>
            <div className='button-container'>
                <button className='prev-btn' onClick={prevData} >
                    <FaChevronLeft />
                </button>
                <button className='next-btn' onClick={nextData} >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    )
}

export default Reviews
