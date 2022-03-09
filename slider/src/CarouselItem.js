import React from 'react';
import PropTypes from 'prop-types';

const CarouselItem = ({
    item,
}) => {
  return (
    <div className="h-full w-full">
        <div className="flex flex-col items-center justify-center h-1/2 text-center">
            <div className={`py-3 px-5 inline-block ${item.color} rounded-full`}>
            <span className="text-white text-xl font-bold">{item.id}</span>
            </div>
            <h1 className="my-6 text-7xl font-bold">{item.title}</h1>
            <h3 className="text-4xl text-gray-500">{item.description}</h3>
        </div>
        <div className={`flex items-center justify-center h-1/2 ${item.color}`}>
            <div className="text-center">
                {item.icon}
            </div>
        </div>
    </div>
  )
}

CarouselItem.propTypes = {
    item: PropTypes.objectOf({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        icon: PropTypes.node.isRequired,
    })
}

export default CarouselItem