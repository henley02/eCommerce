import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { XcErrorImageDirective } from './directive/xc-error-image/xc-error-image.directive';
import { XcSearchHeaderComponent } from './components/xc-search-header/xc-search-header.component';
import { XcLoginModelComponent } from './components/xc-login-model/xc-login-model.component';
import { XcBackButtonComponent } from './components/xc-back-button/xc-back-button.component';

@NgModule({
    declarations: [
        XcErrorImageDirective,
        XcSearchHeaderComponent,
        XcBackButtonComponent,
        XcLoginModelComponent
    ],
    imports: [
        CommonModule,
        IonicModule
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
