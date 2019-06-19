import { Component, OnInit, } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonService } from '../../shared/services/common/common.service';

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

    constructor(private nav: NavController, private commonService: CommonService) {
    }

    ngOnInit() {
        this.getBannerList();
        this.getHotGoodsList();
        this.getGoodList();
    }

    /**
     * 获取轮播图列表
     */
    async getBannerList() {
        const res = await this.commonService.get<any>('api/focus');
        res.result.map((item) => item.pic = `${ this.commonService.config.domain }${ item.pic }`);
        this.list = res.result;
    }

    /**
     * 获取热门商品列表
     */
    async getHotGoodsList() {
        const res = await this.commonService.get<any>('api/plist', {is_hot: 1});
        res.result.map((item) => item.pic = `${ this.commonService.config.domain }${ item.pic }`);
        this.recommendList = res.result;
    }

    /**
     * 获取商品列表
     */
    async getGoodList() {
        const res = await this.commonService.get<any>('api/plist', {is_best: 1});
        res.result.map((item) => item.pic = `${ this.commonService.config.domain }${ item.pic }`);
        this.goodList = res.result;
    }
}

