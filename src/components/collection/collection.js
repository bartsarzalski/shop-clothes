import React from 'react';

import CollectionItem from '../collection-item/collection-item';

import './collection.scss';

const Collection = ({ match }) => {
    console.log(match.params);
    return (
    <div className='collection'>
        <h2>Collection page</h2>
    </div>
    );
}

export default Collection;
