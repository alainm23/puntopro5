import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SoyproUpdateProDataPage } from './soypro-update-pro-data.page';

const routes: Routes = [
  {
    path: '',
    component: SoyproUpdateProDataPage
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
  declarations: [SoyproUpdateProDataPage]
})
export class SoyproUpdateProDataPageModule {}
