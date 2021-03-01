import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProsListCategoryPage } from './pros-list-category.page';

const routes: Routes = [
  {
    path: '',
    component: ProsListCategoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProsListCategoryPage]
})
export class ProsListCategoryPageModule {}
