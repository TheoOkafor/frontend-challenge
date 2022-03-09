import React from 'react';
import Carousel from 'react-elastic-carousel';

import './App.css';

function App() {
  const sliderItems = [
    { id: 1, title: 'item #1' },
    { id: 2, title: 'item #2' },
    { id: 3, title: 'item #3' },
  ];
  return (
    <div className="App">
      <Carousel pagination={false}>
        {sliderItems.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </Carousel>
    </div>
  );
}

export default App;
