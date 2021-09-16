import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoRoutingModule } from './photo-routing.module';
import { SearchPhotoComponent } from './search-photo/search-photo.component';
import { ColorPickerModule } from '@iplab/ngx-color-picker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    SearchPhotoComponent
  ],
  imports: [
    CommonModule,
    PhotoRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
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
  ]
})
export class PhotoModule { }
