import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoRoutingModule } from './photo-routing.module';
import { DetailsPictureComponent } from './details-picture/details-picture.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseCardModule } from '@fuse/components/card';
import { NgxFileDropModule } from 'ngx-file-drop';
import { SharedModule } from 'app/shared/shared.module';
import { UploadPictureComponent } from './upload-picture/upload-picture.component';


@NgModule({
  declarations: [
    DetailsPictureComponent,
    UploadPictureComponent
  ],
  imports: [
    CommonModule,
    PhotoRoutingModule,

    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressBarModule,
    MatTooltipModule,
    FuseCardModule,


    NgxFileDropModule,
    
    SharedModule,
  ]
})
export class PhotoModule { }
