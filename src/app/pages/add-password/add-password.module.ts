import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPasswordPageRoutingModule } from './add-password-routing.module';

import { AddPasswordPage } from './add-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPasswordPageRoutingModule
  ],
  declarations: [AddPasswordPage]
})
export class AddPasswordPageModule {}
