import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchSubcategoriesPage } from './search-subcategories.page';

const routes: Routes = [
  {
    path: '',
    component: SearchSubcategoriesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchSubcategoriesPage]
})
export class SearchSubcategoriesPageModule {}
