import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SoyproSetProDataPage } from './soypro-set-pro-data.page';

const routes: Routes = [
  {
    path: '',
    component: SoyproSetProDataPage
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
  declarations: [SoyproSetProDataPage]
})
export class SoyproSetProDataPageModule {}
