import  { Route, RouterModule, Routes } from '@angular/router';
import { AboutPhenixComponent } from './about-phenix/about-phenix.component';
import { ContactPhenixComponent } from './contact-phenix/contact-phenix.component';
import { HomePhenixComponent } from './home-phenix/home-phenix.component';
import { InscriptionPhenixComponent } from './inscription-phenix/inscription-phenix.component';
import { LegalPhenixComponent } from './legal-phenix/legal-phenix.component';
import { SellPhenixComponent } from './sell-phenix/sell-phenix.component';
import { TemplateGlobalePhenixComponent } from './template-globale-phenix/template-globale-phenix.component';

export const HomePhenixRoutingModule: Route[]=[
    {
    path :'',
    component: HomePhenixComponent},
    {
    path :'home-phenix',
        component: HomePhenixComponent},
    {
            path :'login-phenix',
            component: HomePhenixComponent},
    {
    path :'contact-phenix',
    component: ContactPhenixComponent
    },
    {
        path :'sell-phenix',
        component: SellPhenixComponent
    },
    {
        path :'inscription-phenix',
        component: InscriptionPhenixComponent
    },
    {
        path :'about-phenix',
        component: AboutPhenixComponent
    },
    {
        path :'template-global-phenix',
        component: TemplateGlobalePhenixComponent
    },
    {
        path :'legal-phenix',
        component: LegalPhenixComponent
    },
]