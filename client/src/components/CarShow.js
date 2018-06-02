import React from 'react';
import Card from './Card';

const CarShow = (props) => {
        return (
            <div>
                <h4>Selected Car</h4>
                <Card carModel={props.location.carModel} />
            </div>
        );
}

export default CarShow;