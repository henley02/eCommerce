import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { XcErrorImageDirective } from './directive/xc-error-image/xc-error-image.directive';
import { XcSearchHeaderComponent } from './components/xc-search-header/xc-search-header.component';
import { XcLoginModelComponent } from './components/xc-login-model/xc-login-model.component';
import { XcBackButtonComponent } from './components/xc-back-button/xc-back-button.component';
import { CommonService } from './services/common/common.service';
import { StorageService } from './services/storage/storage.service';
import { MessageService } from './services/message/message.service';
import { ToastService } from './services/toast/toast.service';

@NgModule({
    declarations: [
        XcErrorImageDirective,
        XcSearchHeaderComponent,
        XcBackButtonComponent,
        XcLoginModelComponent,
    ],
    providers: [
        CommonService,
        StorageService,
        MessageService,
        ToastService
    ],
    imports: [
        CommonModule,
        IonicModule,
        HttpClientModule
    ],
    entryComponents: [XcLoginModelComponent],
    exports: [
        XcErrorImageDirective,
        XcSearchHeaderComponent,
        XcBackButtonComponent,
        XcLoginModelComponent
    ]
})
export class SharedModule {
}
