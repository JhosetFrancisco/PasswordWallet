import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-add-password',
  templateUrl: './add-password.page.html',
  styleUrls: ['./add-password.page.scss'],
})
export class AddPasswordPage implements OnInit {

  newPassword = {
    provider: '',
    user: '',
    password: ''
  }

  constructor(public dataLocal: DataLocalService,
              public alertController: AlertController,) { }

  ngOnInit() {
  }

  async addPassword(fPass:NgForm) {
    if(!fPass.valid) {
      const alert = await this.alertController.create({
        cssClass: 'alert-class',
        header: 'Error',
        message: 'Ingrese sus datos.',
        buttons: ['OK']
      });
  
      await alert.present();
      return ;
    }
    await this.dataLocal.savePassword(this.newPassword.provider, this.newPassword.user, this.newPassword.password);

    const alert = await this.alertController.create({
      cssClass: 'alert-class',
      header: 'Info',
      message: 'Contraseña recibida.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
