import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmergencyRequestListPage } from './emergency-request-list.page';

const routes: Routes = [
  {
    path: '',
    component: EmergencyRequestListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmergencyRequestListPage]
})
export class EmergencyRequestListPageModule {}
