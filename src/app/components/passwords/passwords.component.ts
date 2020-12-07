import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { Password } from '../../../app/models/password.model'
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-passwords',
  templateUrl: './passwords.component.html',
  styleUrls: ['./passwords.component.scss'],
})
export class PasswordsComponent implements OnInit {

  constructor(public dataLocal: DataLocalService,
              private navCtrl: NavController,
              private clipboard: Clipboard,
              public alertController: AlertController) { }

  ngOnInit() {}

  addPassword() {
    this.navCtrl.navigateRoot('/add-password', {animated: true});
  }
  
  async deletePass(registro:Password) {
    await this.dataLocal.deletePassword(registro);
  }

  async clipboardPass(registro:Password) {
    const password = this.dataLocal.decryptPassword(registro);
    this.clipboard.copy(password);
    const alert = await this.alertController.create({
      cssClass: 'alert-class',
      header: 'Info',
      message: `Contraseña copiada para el usuario: ${registro.usuario}`,
      buttons: ['OK']
    });

    await alert.present();
  }
}
