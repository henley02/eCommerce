import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.page.html',
    styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
    id = '';
    segmentSelected = '';
    segmentList = [
        {name: '商品', value: 'good'},
        {name: '详情', value: 'detail'},
    ];

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.segmentSelected = this.segmentList[0].value;
        this.activatedRoute.params.subscribe((params) => {
            this.id = params.id;
        });
    }
}
