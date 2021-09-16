import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPhotoComponent } from './search-photo/search-photo.component';

const routes: Routes = [
  {
    path: 'search-photo', component: SearchPhotoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoRoutingModule { }
