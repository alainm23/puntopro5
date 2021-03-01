import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SoyproSelectPlanPage } from './soypro-select-plan.page';

const routes: Routes = [
  {
    path: '',
    component: SoyproSelectPlanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SoyproSelectPlanPage]
})
export class SoyproSelectPlanPageModule {}
