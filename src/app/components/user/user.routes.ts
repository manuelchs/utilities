import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NewUserComponent } from './new-user/new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DetailUserComponent } from './detail-user/detail-user.component';

export const USER_ROUTES: Routes = [
    { path: 'new', component: NewUserComponent },
    { path: 'edit', component: EditUserComponent },
    { path: 'detail', component: DetailUserComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'detail' }
];
