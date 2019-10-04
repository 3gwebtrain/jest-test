import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './components/popup/popup.component';
import { ShellPopupComponent } from './containers/shell-popup/shell-popup.component';


import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from './state/reducer/reducer-shared';

@NgModule({
  declarations: [PopupComponent, ShellPopupComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('shared', reducer),
    // EffectsModule.forFeature([SetupConfigEffects]),
  ],
    exports: [PopupComponent, ShellPopupComponent]
})
export class SharedModule { }
