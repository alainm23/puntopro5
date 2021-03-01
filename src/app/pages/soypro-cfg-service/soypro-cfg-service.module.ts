import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SoyproCfgServicePage } from './soypro-cfg-service.page';

const routes: Routes = [
  {
    path: '',
    component: SoyproCfgServicePage
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
  declarations: [SoyproCfgServicePage]
})
export class SoyproCfgServicePageModule {}
