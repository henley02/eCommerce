import { Component, OnInit, } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-index',
    templateUrl: './index.page.html',
    styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
    list: any = [];
    // 推荐商品
    recommendList: any = [];
    goodList: any = [];
    slideOptions = {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        loop: true,
    };

    constructor(private nav: NavController) {
        for (let i = 1; i <= 3; i++) {
            this.list.push({
                pic: `/assets/images/slide/slide0${ i }.png`,
                url: ''
            });
        }

        for (let i = 1; i <= 10; i++) {
            this.recommendList.push({
                pic: `/assets/images/recommend/${ i < 10 ? ('0' + i) : i }.jpg`,
                title: `第${ i }个`,
                url: ''
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
