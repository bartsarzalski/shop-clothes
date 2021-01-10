import { createSelector } from 'reselect';

/* const selectCollection = state => state.shop;

export const selectCollections = createSelector(
    [selectCollection],
    shop => shop.collections
); */

const selectShop = state => {
    return state.shop
}

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
);