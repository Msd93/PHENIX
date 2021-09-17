import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPictureComponent } from './details-picture/details-picture.component';
import { UploadPictureComponent } from './upload-picture/upload-picture.component';

const routes: Routes = [
  {
    path: 'details-picture',
    component: DetailsPictureComponent
  },
  {
    path: 'upload-picture',
    component: UploadPictureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoRoutingModule { }
