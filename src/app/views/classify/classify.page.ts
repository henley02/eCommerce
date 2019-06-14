import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-classify',
    templateUrl: './classify.page.html',
    styleUrls: ['./classify.page.scss'],
})
export class ClassifyPage implements OnInit {
    cateList: any = [];
    goodList: any = [];

    constructor() {
        for (let i = 0; i < 20; i++) {
            this.cateList.push({
                title: `分类${ i }`
            });
        }
        for (let i = 1; i <= 10; i++) {
            this.goodList.push({
                pic: `/assets/images/goods/list${ i }.jpg`,
                title: `第${ i }个`,
                url: ''
            });
        }
    }

    ngOnInit() {
    }

}
