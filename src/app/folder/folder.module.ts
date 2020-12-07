import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';

import { PasswordsComponent } from '../components/passwords/passwords.component';
import { TrashComponent } from '../components/trash/trash.component';
import { ConfigComponent } from '../components/config/config.component';
import { InfoComponent } from '../components/info/info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule
  ],
  declarations: [
    FolderPage,
    PasswordsComponent,
    TrashComponent,
    ConfigComponent,
    InfoComponent
  ]
})
export class FolderPageModule {}
