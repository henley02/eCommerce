import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../../shared/services/common/common.service';
import { IonContent, IonInfiniteScroll } from '@ionic/angular';
import { StorageService } from '../../shared/services/storage/storage.service';
import { ToastService } from '../../shared/services/toast/toast.service';
import { MessageService } from '../../shared/services/message/message.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
    @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
    @ViewChild(IonContent) content: IonContent;
    flag = true;
    keywords = '';
    pageSize = 10;
    pageIndex = 1;
    productList = [];
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
    historyList = [];

    constructor(private commonService: CommonService,
                private storageService: StorageService,
                private toastService: ToastService,
                private message: MessageService
    ) {
    }

    ngOnInit() {
        this.historyList = this.storageService.get('history') || [];
    }

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

    doSearch() {
        if (this.keywords.trim() === '') {
            this.toastService.info('请输入内容');
            return;
        }
        this.content.scrollToTop(0);
        this.flag = false;
        this.pageIndex = 1;
        this.productList = [];
        this.infiniteScroll.disabled = false;
        this.getProduct();
        this.saveHistory(this.keywords);
    }

    async getProduct() {
        const params = {
            search: this.keywords,
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
    }

    saveHistory(value) {
        const history = this.storageService.get('history') || [];
        const findIndex = history.indexOf(value);
        if (findIndex > -1) {
            history.splice(findIndex, 1);
        }
        history.unshift(value);
        this.storageService.set('history', history);
        this.historyList = history;
    }

    historyClick(item) {
        this.keywords = item;
        this.doSearch();
    }

    delHistory(e, item, i) {
        e.stopPropagation();
        this.message.confirm({
            message: `确定要删除${ item }吗？`,
            confirmButtonText: '取消',
            cancelButtonText: '删除',
            cancelCallback: () => {
                const history = this.storageService.get('history') || [];
                history.splice(i, 1);
                this.storageService.set('history', history);
                this.historyList = history;
            }
        });
    }
}
