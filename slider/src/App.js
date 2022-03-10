import React from 'react';
import Carousel from 'react-elastic-carousel';
import { RiContrastDropFill } from 'react-icons/ri';
import { ImEyedropper } from 'react-icons/im';
import { IoMdColorPalette } from 'react-icons/io';

import './App.css';
import CarouselItem from './CarouselItem';

function App() {
  const sliderItems = [
    {
      id: 1,
      title: 'Gradients',
      description: 'Start, end, angle',
      color: 'bg-gradient-to-tr from-purple-700 to-cyan-300',
      icon: <RiContrastDropFill color="white" size={100} />,
    },
    {
      id: 2,
      title: 'Presets',
      description: 'Manage Presets',
      color: 'bg-gradient-to-tr from-cyan-300 to-yellow-400',
      icon: <IoMdColorPalette color="white" size={100}  />,
    },
    {
      id: 3,
      title: 'Colors',
      description: 'Pick any color',
      color: 'bg-gradient-to-tr from-yellow-400 to-pink-400',
      icon: <ImEyedropper color="white" size={100}  />,
    },
  ];
  return (
    <div className="App">
      <Carousel pagination={false} showArrows={false}>
        {sliderItems.map((item) => (
          <CarouselItem key={item.id} item={item} />
        ))}
      </Carousel>
    </div>
  );
}

export default App;
