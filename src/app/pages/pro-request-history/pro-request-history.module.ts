import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProRequestHistoryPage } from './pro-request-history.page';

const routes: Routes = [
  {
    path: '',
    component: ProRequestHistoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProRequestHistoryPage]
})
export class ProRequestHistoryPageModule {}
