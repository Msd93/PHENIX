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
<<<<<<< HEAD
import { UploadPictureComponent } from './upload-picture/upload-picture.component';
=======
import { SearchPhotoComponent } from './search-photo/search-photo.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ColorPickerModule } from '@iplab/ngx-color-picker';
>>>>>>> 34e5cae73cecca0624b7e44df045a2484f4a2d8a


@NgModule({
  declarations: [
<<<<<<< HEAD
    DetailsPictureComponent,
    UploadPictureComponent
=======
    SearchPhotoComponent,
    DetailsPictureComponent
>>>>>>> 34e5cae73cecca0624b7e44df045a2484f4a2d8a
  ],
  imports: [
    CommonModule,
    PhotoRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatRadioModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatTableModule,
    MatTooltipModule,
    MatSelectModule,
    FuseScrollbarModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatSlideToggleModule,

    
    ColorPickerModule, // module color picker
    MatProgressBarModule,
    FuseCardModule,


    NgxFileDropModule,
    
    SharedModule,
  ]
})
export class PhotoModule { }
