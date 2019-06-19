import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    constructor(private toastController: ToastController) {
    }

    async info(msg: string, duration: number = 2000) {
        const toast = await this.toastController.create({
            message: msg,
            position: 'middle',
            color: 'dark',
            duration
        });
        toast.present();
    }
}
