import React from 'react';

import withCounter from './withCounter';

/* const ButtonCounter = ({ count, incrementCount}) => (
    <button onClick={incrementCount}>Count: {count}</button>
); */

class ButtonCounter extends React.Component {

    render() {
        const { count, incrementCount } = this.props;
        return (
            <button onClick={incrementCount}>Count {count}</button>
        );
    }
}

export default withCounter(ButtonCounter);