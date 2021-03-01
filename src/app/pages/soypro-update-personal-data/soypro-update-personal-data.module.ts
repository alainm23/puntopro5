import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SoyproUpdatePersonalDataPage } from './soypro-update-personal-data.page';

const routes: Routes = [
  {
    path: '',
    component: SoyproUpdatePersonalDataPage
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
  declarations: [SoyproUpdatePersonalDataPage]
})
export class SoyproUpdatePersonalDataPageModule {}
