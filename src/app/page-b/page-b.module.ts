import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { IonicModule } from '@ionic/angular';

import { PageBPage } from './page-b.page';

const routes: Routes = [
  {
    path: '',
    component: PageBPage
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes),MatButtonModule],
  declarations: [PageBPage]
})
export class PageBPageModule {}
