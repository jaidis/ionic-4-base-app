import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  constructor(public toastController: ToastController) { }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Acción confirmada correctamente.',
      duration: 2000
    });
    toast.present();
  }

  async presentToast2() {
    const toast = await this.toastController.create({
      message: 'Acción confirmada correctamente.',
      showCloseButton: true,
      position: 'top',
      closeButtonText: 'Cerrar'
    });
    toast.present();
  }

  async presentToast3() {
    const toast = await this.toastController.create({
      animated: true,
      color: 'danger',
      message: '¡Porqué tocas!',
      position: 'middle',
      translucent: true,
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
  }

}
