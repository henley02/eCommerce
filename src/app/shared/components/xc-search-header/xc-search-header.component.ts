import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-xc-search-header',
    templateUrl: './xc-search-header.component.html',
    styleUrls: ['./xc-search-header.component.scss'],
})
export class XcSearchHeaderComponent implements OnInit {

    constructor(private nav: NavController) {
    }

    ngOnInit() {
    }

    /**
     * 跳转到搜索页面
     */
    goSearch() {
        this.nav.navigateForward('/search');
    }
}
