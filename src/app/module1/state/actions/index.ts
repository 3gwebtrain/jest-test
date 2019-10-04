import { createAction, props } from '@ngrx/store';
import { StoreOne, Item } from './../../models';

export const Loading = createAction(
    '[store-one] Loading'
);


export const Items = createAction(
    '[store-one] Items'
);
