import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from '@ionic/angular';

@Component({
    selector: 'app-xc-login-model',
    templateUrl: './xc-login-model.component.html',
    styleUrls: ['./xc-login-model.component.scss'],
})
export class XcLoginModelComponent implements OnInit {

    constructor(private navParams: NavParams, private navController: NavController) {
    }

    ngOnInit() {
        console.log(this.navParams);
    }

    close() {
        this.navParams.data.modal.dismiss({isLogin: false});
    }

    goRegister() {
        this.navParams.data.modal.dismiss();
        this.navController.navigateForward('/register');
    }

    ionModalWillDismiss() {
        console.log(1232);
    }
}
