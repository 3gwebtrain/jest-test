import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ShellHomeComponent } from './shell-home.component';
import { StoreOne } from './../../models';
import { Store, select } from '@ngrx/store';
import { cold, hot } from 'jasmine-marbles';
import { map } from 'rxjs/operators';

describe('ShellHomeComponent', () => {

    // let fixture: ComponentFixture<ShellHomeComponent>;
    let mockStore: MockStore<StoreOne>;
    let component: ShellHomeComponent;

    const loadingState = { loading: true } as StoreOne;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: [RouterTestingModule],
            providers: [provideMockStore({ initialState: loadingState })]
        })
        .compileComponents();

        mockStore = TestBed.get(Store);

    }));

    it('should display loading as true', async(() => {
        const expected = cold('a', { a: true });
        // fixture = TestBed.createComponent(ShellHomeComponent);
        //component = fixture.componentInstance;
        expect(component.loading).toBeObservable(expected);
        //fixture.detectChanges();
    }));

    // it('shou add 1 to each value emitted', () => {
    //     const values = { a: 1, b: 2, c: 3, x: 2, y: 3, z: 4 };
    //     const source = cold('a-b-c-|', values);
    //     const expected = cold('x-y-z-|', values);

    //     const result = source.pipe(map(x => x + 1));
    //     expect(result).toBeObservable(expected);
    // })

});
