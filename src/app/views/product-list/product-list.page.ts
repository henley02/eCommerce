import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../shared/services/common/common.service';
import { IonContent, IonInfiniteScroll } from '@ionic/angular';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.page.html',
    styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
    @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
    @ViewChild(IonContent) content: IonContent;
    productList = [];
    cid = '';
    pageSize = 15;
    pageIndex = 1;
    subheaderSelectedIndex = 0;
    subheaderList = [
        {
            id: 1,
            title: '综合',
            filed: 'all',
            sort: -1
        },
        {
            id: 2,
            title: '销量',
            filed: 'salecount',
            sort: -1
        }, {
            id: 3,
            title: '价格',
            filed: 'price',
            sort: -1
        },
    ];

    subheaderChange(index) {
        this.content.scrollToTop(0);
        this.subheaderSelectedIndex = index;
        this.pageIndex = 1;
        this.productList = [];
        this.infiniteScroll.disabled = false;
        const find = this.subheaderList[this.subheaderSelectedIndex];
        find.sort = find.sort * -1;
        this.getProduct();
    }

    constructor(private activatedRoute: ActivatedRoute, private commonService: CommonService) {
        activatedRoute.params.subscribe((params) => {
            this.cid = params.id;
        });
    }

    ngOnInit() {
        this.getProduct();
    }

    async getProduct() {
        const params = {
            cid: this.cid,
            pageSize: this.pageSize,
            page: this.pageIndex,
            sort: null
        };
        if (this.subheaderSelectedIndex > -1) {
            const find = this.subheaderList[this.subheaderSelectedIndex];
            params.sort = `${ find.filed }_${ find.sort }`;
        }
        const res = await this.commonService.get<any>('api/plist', params);
        res.result.map((item) => item.pic = `${ this.commonService.config.domain }${ item.pic }`);
        this.productList = this.productList.concat(res.result);
        this.infiniteScroll.complete();
        if (res.result.length < this.pageSize) {
            this.infiniteScroll.disabled = true;
        } else {
            this.pageIndex++;
        }
        console.log(this.productList);
    }
}
