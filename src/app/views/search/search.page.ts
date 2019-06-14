import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
    flag = true;
    goodList: any = [];

    constructor() {
    }

    ngOnInit() {
        for (let i = 1; i <= 10; i++) {
            this.goodList.push({
                pic: `/assets/images/goods/list${ i }.jpg`,
                title: `第23131哈哈分阿水法石芳撒发放阿法法石芳阿石芳撒发撒法法石芳石芳苏打粉阿水发送${ i }个`,
                url: '',
                price: i + 10,
            });
        }
    }

    doSearch() {
        this.flag = false;
    }
}
