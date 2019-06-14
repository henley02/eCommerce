import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.page.html',
    styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
    goodList: any = [];

    constructor() {
    }

    ngOnInit() {
        for (let i = 1; i <= 10; i++) {
            this.goodList.push({
                pic: `/assets/images/goods/list${ i }.jpg`,
                title: `我是一个商品标题我是一个商品标题第${ i }个`,
                url: '',
                price: i + 100,
                num: i,
            });
        }
    }

}
