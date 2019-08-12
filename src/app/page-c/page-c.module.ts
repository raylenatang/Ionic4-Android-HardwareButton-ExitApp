import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { IonicModule } from '@ionic/angular';

import { PageCPage } from './page-c.page';

const routes: Routes = [
  {
    path: '',
    component: PageCPage
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes),MatButtonModule],
  declarations: [PageCPage]
})
export class PageCPageModule {}
