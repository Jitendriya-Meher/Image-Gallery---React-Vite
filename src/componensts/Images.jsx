import React from 'react'

const Images = ({data,setIndex}) => {
  return (
    <div className='images-container'>
      {
        data.map( (slide, index) => (
          <div className="image" key={index} onClick={() => {
            setIndex(index);
          }}>
            <img src={slide.src} alt={slide.description} />
          </div>
        ))
      }
    </div>
  )
}

export default Images
