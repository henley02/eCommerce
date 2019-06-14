import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-xc-back-button',
    templateUrl: './xc-back-button.component.html',
    styleUrls: ['./xc-back-button.component.scss'],
})
export class XcBackButtonComponent implements OnInit {
    @Input('defaultHref') defaultHref;

    constructor(private nav: NavController) {
    }

    ngOnInit() {
    }

    goBack() {
        this.nav.back();
    }
}
