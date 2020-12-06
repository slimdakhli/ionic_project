import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExecutedPage } from './executed.page';

const routes: Routes = [
  {
    path: '',
    component: ExecutedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExecutedPageRoutingModule {}
