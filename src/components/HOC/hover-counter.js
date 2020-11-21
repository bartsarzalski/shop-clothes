import React from 'react';

import withCounter from './withCounter';

const HoverCounter = ({ count, incrementCount}) => (
    <h1 onMouseOver={incrementCount}>Count: {count}</h1>
);

export default withCounter(HoverCounter);