import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SoyproSetPersonalDataPage } from './soypro-set-personal-data.page';

const routes: Routes = [
  {
    path: '',
    component: SoyproSetPersonalDataPage
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
  declarations: [SoyproSetPersonalDataPage]
})
export class SoyproSetPersonalDataPageModule {}
