import { Component, OnInit } from '@angular/core';
import { XcLoginModelComponent } from '../../shared/components/xc-login-model/xc-login-model.component';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-my',
    templateUrl: './my.page.html',
    styleUrls: ['./my.page.scss'],
})
export class MyPage implements OnInit {
    isLogin = false;

    constructor(public modal: ModalController) {
    }

    ngOnInit() {
    }

    async openLoginModel() {
        const modal = await this.modal.create({
            component: XcLoginModelComponent,
            componentProps: {}
        });
        await modal.present();
        const backData = await modal.onDidDismiss();
        console.log(backData);
    }
}
