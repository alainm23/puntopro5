import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SoyproSelectCategoryPage } from './soypro-select-category.page';

const routes: Routes = [
  {
    path: '',
    component: SoyproSelectCategoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SoyproSelectCategoryPage]
})
export class SoyproSelectCategoryPageModule {}
