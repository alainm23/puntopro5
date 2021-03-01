import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SoyproDataRequiredPage } from './soypro-data-required.page';

const routes: Routes = [
  {
    path: '',
    component: SoyproDataRequiredPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SoyproDataRequiredPage]
})
export class SoyproDataRequiredPageModule {}
