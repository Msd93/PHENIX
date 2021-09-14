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

@NgModule({
  declarations: [
    HomePhenixComponent
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
  ]
  
})
export class HomePhenixModule { }
