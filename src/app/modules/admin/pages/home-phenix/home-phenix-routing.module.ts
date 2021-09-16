import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { ContactPhenixComponent } from './contact-phenix/contact-phenix.component';
import { HomePhenixComponent } from './home-phenix/home-phenix.component';

export const HomePhenixRoutingModule: Route[]=[
    {
    path :'',
    component: HomePhenixComponent},
    {
    path :'contact-phenix',
    component: ContactPhenixComponent
    }
]