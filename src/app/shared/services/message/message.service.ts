import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AlertOptions } from '@ionic/core';


interface AlertOption extends AlertOptions {
    /**
     * 确认按钮文案
     */
    confirmButtonText?: string;
    /**
     * 确认按钮回调
     */
    confirmCallback?: any;
    /**
     * 取消按钮文案
     */
    cancelButtonText?: string;
    /**
     * 取消按钮回调
     */
    cancelCallback?: any;
}


@Injectable({
    providedIn: 'root'
})

export class MessageService {

    constructor(private alertController: AlertController) {
    }

    private async message(option: AlertOptions) {
        const alert = await this.alertController.create(option);
        await alert.present();
    }

    alert(message: string | AlertOption) {
        if (typeof message === 'object') {
            this.message({
                message: message.message,
                header: message.header,
                subHeader: message.subHeader,
                backdropDismiss: message.backdropDismiss || false,
                buttons: [
                    {
                        text: message.confirmButtonText || '确认',
                        cssClass: 'alert-custom-confirm',
                        handler: message.confirmCallback || ''
                    }
                ]
            });
        } else {
            this.message({
                message,
                buttons: [
                    {
                        text: '确认',
                        cssClass: 'alert-custom-confirm',
                    }
                ]
            });
        }
    }

    confirm(message: AlertOption) {
        this.message({
            header: message.header,
            subHeader: message.subHeader,
            message: message.message,
            buttons: [
                {
                    text: message.cancelButtonText || '取消',
                    cssClass: 'alert-custom-cancel',
                    handler: message.cancelCallback || ''
                },
                {
                    text: message.confirmButtonText || '确认',
                    cssClass: 'alert-custom-confirm',
                    handler: message.confirmCallback || ''
                }
            ]
        });
    }
}
