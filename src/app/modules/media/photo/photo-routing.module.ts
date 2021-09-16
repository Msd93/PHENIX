import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPictureComponent } from './details-picture/details-picture.component';

const routes: Routes = [
  {
    path: 'details-picture',
    component: DetailsPictureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoRoutingModule { }
