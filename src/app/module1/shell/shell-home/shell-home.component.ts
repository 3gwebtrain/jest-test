import { Component, OnInit, OnChanges } from '@angular/core';
import { StoreOne, Item } from './../../models';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as slices from './../../state';
import * as actions from './../../state/actions';

@Component({
    selector: 'app-shell-home',
    templateUrl: './shell-home.component.html',
    styleUrls: ['./shell-home.component.scss']
})
export class ShellHomeComponent implements OnInit {

    constructor(private store: Store<StoreOne>) {}

    items: Observable<Item[]>;
    loading: Observable<boolean>;

    ngOnInit() {

        this.store.dispatch(actions.Items());
        this.items = this.store.pipe(select(slices.getItems));
        this.loading = this.store.pipe(select(slices.getLoad));

        this.store.subscribe(state => console.log(state));

    }


}
