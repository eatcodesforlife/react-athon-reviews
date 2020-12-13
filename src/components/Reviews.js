import React, { useState } from 'react'
import reviews from '../utils/data'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Reviews = () => {

    
    const [ index, setIndex ] = useState(0)
    const { name, job, image, text } = reviews[index]

    const checkIndex = (currentIndex) => {
        if(currentIndex === reviews.length ) currentIndex = 0
        if(currentIndex === -1 ) currentIndex = reviews.length - 1
        return currentIndex
    }
    
    
    const prevButton = () => {
        setIndex(( index ) => {
            let currentIndex = index - 1
            return checkIndex(currentIndex)
        }) 
    }

    const nextButton = () => {
        setIndex(( index ) => {
            let currentIndex = index + 1
            return checkIndex(currentIndex)
        })
    }

    const random = () => {
        let randNum = Math.floor(Math.random() * reviews.length) 
        if(randNum === index ) randNum = index + 1
        setIndex(checkIndex(randNum))
    }

    

    return (
        <article className='review'>
            <div className="img-container">
                <LazyLoadImage 
                    src={image}
                    alt={name}
                    className='person-img'
                />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevButton}>
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={nextButton}>
                    <FaChevronRight />
                </button>
            </div>
            <button className="random-btn" onClick={random}>
                surprise me
            </button>
        </article>
    )
}

export default Reviews
