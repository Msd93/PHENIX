import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePhenixRoutingModule } from './home-phenix-routing.module';
import { HomePhenixComponent } from './home-phenix/home-phenix.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FuseAlertModule } from '@fuse/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MaterialLayoutModule } from 'app/layout/layouts/horizontal/material/material.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoginComponent } from './login/login.component';
import { ContactPhenixComponent } from './contact-phenix/contact-phenix.component';
import { SellPhenixComponent } from './sell-phenix/sell-phenix.component';
import { InscriptionPhenixComponent } from './inscription-phenix/inscription-phenix.component';
import { AboutPhenixComponent } from './about-phenix/about-phenix.component';
import { TemplateGlobalePhenixComponent } from './template-globale-phenix/template-globale-phenix.component';
import { LegalPhenixComponent } from './legal-phenix/legal-phenix.component';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    HomePhenixComponent,
    LoginComponent,
    ContactPhenixComponent,
    SellPhenixComponent,
    InscriptionPhenixComponent,
    AboutPhenixComponent,
    TemplateGlobalePhenixComponent,
    LegalPhenixComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HomePhenixRoutingModule),
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    FuseAlertModule,
    SharedModule,
    MatButtonModule,
    MatExpansionModule,
    MaterialLayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FuseAlertModule,
    QuillModule.forRoot(),
    SharedModule
  ]
  
})
export class HomePhenixModule { }
