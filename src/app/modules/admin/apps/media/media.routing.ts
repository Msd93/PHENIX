import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { DetailsImageComponent } from './details-image/details-image.component';

export const mediaRoutes: Route[] = [
  {
      path     : '',
      component: DetailsImageComponent,
/*       children : [
          {
              path     : '',
              component: NotesListComponent
          }
      ] */
  }
];

@NgModule({
  imports: [RouterModule.forChild(mediaRoutes)],
  exports: [RouterModule]
})
export class MediaRoutingModule { }
