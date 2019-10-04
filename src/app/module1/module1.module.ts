import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ShellHomeComponent } from './shell/shell-home/shell-home.component';

import { SharedModule } from './../shared/shared.module';

const routes: Routes = [
    { path: '', component: ShellHomeComponent }
];


import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from './state/reducer/reducer-storeOne';

@NgModule({
    declarations: [HomeComponent, ShellHomeComponent],
    imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    StoreModule.forFeature('storeOne', reducer),
    // EffectsModule.forFeature([SetupConfigEffects]),
    ],
    exports: [
        RouterModule
    ]
})
export class Module1Module { }
