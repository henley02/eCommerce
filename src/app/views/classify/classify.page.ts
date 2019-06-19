import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../shared/services/common/common.service';
import { MessageService } from '../../shared/services/message/message.service';
import { ToastService } from '../../shared/services/toast/toast.service';

@Component({
    selector: 'app-classify',
    templateUrl: './classify.page.html',
    styleUrls: ['./classify.page.scss'],
})
export class ClassifyPage implements OnInit {
    cateList: any = [];
    goodList: any = [];
    pid: string;

    constructor(private commonService: CommonService, private message: MessageService, private toast: ToastService) {
    }

    ngOnInit() {
        this.getLeftCateData();
    }

    async getLeftCateData() {
        const res = await this.commonService.get<any>('api/pcate');
        this.cateList = res.result;
        this.pid = this.cateList[0]._id;
        this.getRightCateData();
    }

    changeCate(item) {
        this.pid = item._id;
        this.getRightCateData();
    }

    async getRightCateData() {
        const res = await this.commonService.get<any>('api/pcate', {pid: this.pid});
        res.result.map((item) => item.pic = `${ this.commonService.config.domain }${ item.pic }`);
        this.goodList = res.result;
    }
}
