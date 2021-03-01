import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SoyproPresentationPage } from './soypro-presentation.page';

const routes: Routes = [
  {
    path: '',
    component: SoyproPresentationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SoyproPresentationPage]
})
export class SoyproPresentationPageModule {}
