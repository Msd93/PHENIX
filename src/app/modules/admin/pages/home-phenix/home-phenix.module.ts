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
import { SignInModule } from '../authentication/sign-in/sign-in.module';
import { SignUpModule } from '../authentication/sign-up/sign-up.module';
import { SignOutModule } from '../authentication/sign-out/sign-out.module';
import { ForgotPasswordModule } from '../authentication/forgot-password/forgot-password.module';
import { ResetPasswordModule } from '../authentication/reset-password/reset-password.module';
import { UnlockSessionModule } from '../authentication/unlock-session/unlock-session.module';
import { ConfirmationRequiredModule } from '../authentication/confirmation-required/confirmation-required.module';
import { MaterialLayoutModule } from 'app/layout/layouts/horizontal/material/material.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoginComponent } from './login/login.component';
import { ContactPhenixComponent } from './contact-phenix/contact-phenix.component';

@NgModule({
  declarations: [
    HomePhenixComponent,
    LoginComponent,
    ContactPhenixComponent
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
    SignInModule,
    SignUpModule,
    SignOutModule,
    ForgotPasswordModule,
    ResetPasswordModule,
    UnlockSessionModule,
    ConfirmationRequiredModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FuseAlertModule,
    SharedModule
  ]
  
})
export class HomePhenixModule { }
