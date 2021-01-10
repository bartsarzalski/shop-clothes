import React from 'react';
import { connect } from 'react-redux';

import CollectionPreview from '../collection-preview/collection-preview';
import { selectCollectionsForPreview } from '../../redux/shop/shop-selectors';

import './collection-overview.scss';

const CollectionOverview = ({ collections }) => (
    <div className="collections-overview">
        {collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
);

const mapStateToProps = state => ({
    collections: selectCollectionsForPreview(state) 
}); 

export default connect(mapStateToProps)(CollectionOverview)