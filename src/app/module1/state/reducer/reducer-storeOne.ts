import { StoreOne } from './../../models';
import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './../actions';

export const initialState: StoreOne = {
    loading: true,
    items: []
};

export const reducerStoreOne = createReducer(initialState,

    on(actions.Loading, state => {

        return {
            ...state,
            loading: true
        };

    }),
    on(actions.Items, (state) => {

        return {
            ...state,
            items: [{ name: '1' }, { name: '2' }]
        };
    })

);

export function reducer(state: StoreOne|undefined, action: Action) {
    return reducerStoreOne(state, action);
}