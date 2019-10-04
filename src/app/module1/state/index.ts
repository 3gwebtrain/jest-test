import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StoreOne } from './../models';

const reducerFeatureState = createFeatureSelector<any>('storeOne');

export const getLoad = createSelector(reducerFeatureState, (state: StoreOne) => {

    return state.loading;

});

export const getItems = createSelector(reducerFeatureState, (state: StoreOne) => {
  
    return state.items;

});