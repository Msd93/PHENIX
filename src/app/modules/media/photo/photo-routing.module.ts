import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPhotoComponent } from './search-photo/search-photo.component';
import { DetailsPictureComponent } from './details-picture/details-picture.component';
import { UploadPictureComponent } from './upload-picture/upload-picture.component';
import { FavoritePictureComponent } from './favorite-picture/favorite-picture.component';

const routes: Routes = [
  {
    path: 'search-photo', component: SearchPhotoComponent
  },
  {
    path: 'details-picture',
    component: DetailsPictureComponent
  },
  {
    path: 'upload-picture',
    component: UploadPictureComponent
  },
  {
    path: 'favorite-picture',
    component: FavoritePictureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoRoutingModule { }
