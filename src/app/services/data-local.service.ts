import CryptoJS  from 'crypto-js';
import config from '../config';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Password } from '../models/password.model'
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  passwords: Password[] = [];

  constructor(private storage: Storage,
              public alertController: AlertController) {
    // cargar registros
    this.cargarStorage();
  }

  async cargarStorage() {
    this.passwords = await this.storage.get('passwords') || [];
  }

  async savePassword( provider: string, usuario:string,password: string ) {
    var encryptPassword = CryptoJS.AES.encrypt(password, config.secret_key).toString();
    await this.cargarStorage();
    const nuevoPassword = new Password( provider, usuario, encryptPassword );
    this.passwords.unshift( nuevoPassword );
    // console.log(this.passwords);
    this.storage.set('passwords', this.passwords);
  }

  async deletePassword(pass2delete:Password) {
    await this.cargarStorage();
    await this.storage.remove('passwords');
    this.passwords = this.passwords.filter((item) => item.usuario !== pass2delete.usuario);
    this.storage.set('passwords', this.passwords);
  }

  decryptPassword(encryptPassword:Password) {
    const bytes  = CryptoJS.AES.decrypt(encryptPassword.encryptPassword, config.secret_key);
    const originalPass = bytes.toString(CryptoJS.enc.Utf8);
    return originalPass
  }
}
