import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExecutedPageRoutingModule } from './executed-routing.module';

import { ExecutedPage } from './executed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExecutedPageRoutingModule
  ],
  declarations: [ExecutedPage]
})
export class ExecutedPageModule {}
