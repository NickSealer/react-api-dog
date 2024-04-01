import React, { useState } from 'react'
import '../styles/dogs/dogs.css'
import dogOne from '../images/doggy_one.webp'
import dogTwo from '../images/doggy_two.jpg'

export const DogPicture = () => {
  const dogs = [dogOne, dogTwo];
  const borders = ['black', 'firebrick', 'maroon', 'slategray', 'teal', 'navy', 'forestgreen', 'darkred', 'gold', 'currentColor'];
  const backgrounds = ['burlywood', 'floralWhite', 'gainsboro', 'khaki', 'lawngreen', 'wheat', 'thistle', 'silver', 'powderblue', 'seagreen', 'aliceblue'];

  let [dog, setDog] = useState(0);
  let [borderPosition, setBorderPosition] = useState(0);
  let [borderColor, setBorderColor] = useState(0);
  let [backgroundPosition, setBackgroundPosition] = useState(0);
  let [backgroundColor, setBackgroundColor] = useState(0);

  const handleBorderColor = (position) => {
    let result = parseInt(position);
    setBorderPosition(result += 1);

    if (borderPosition >= 9) {
      setBorderPosition(0);
    }

    setBorderColor(borders[borderPosition]);
  }

  const hadleBackgroundColor = (position) => {
    let result = parseInt(position);
    setBackgroundPosition(result += 1);

    if (backgroundPosition >= 10) {
      setBackgroundPosition(0);
    }

    setBackgroundColor(backgrounds[backgroundPosition]);
  }

  function handleRandomStyle() {
    let border = borders[Math.floor(Math.random() * borders.length)];
    let background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    setBorderColor(border);
    setBackgroundColor(background);
  }

  function hadleDogPicture() {
    if (dog === 0) {
      setDog(1);
    } else {
      setDog(0);
    }
  }

  return (
    <div>
      <div className='dog-picture' style={{ borderColor: borderColor, backgroundColor: backgroundColor }}>
        <img src={dogs[dog]} alt='doggy' />
      </div>
      <div className='options-picture'>
        <button onClick={e => handleBorderColor(e.target.value)} value={borderPosition} type='button' className='btn btn-outline-primary float-left'>Change Frame</button>
        <button onClick={e => hadleBackgroundColor(e.target.value)} value={backgroundPosition} type='button' className='btn btn-outline-primary'>Change Background</button>
      </div>
      <div className='options-picture'>
        <button onClick={handleRandomStyle} type='button' className='btn btn-outline-primary float-left'>Random Style</button>
        <button onClick={hadleDogPicture} type='button' className='btn btn-outline-primary'>Change Doggy</button>
      </div>
    </div>
  )
}
