import { Directive, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[appXcErrorImage]'
})
export class XcErrorImageDirective {
    @Input('appXcErrorImg') errorImgSrc: string;

    count = 0;

    constructor() {
    }

    @HostListener('error', ['$event.target'])
    ImageError(event) {
        if (this.count === 2) {
            return;
        }
        if (this.errorImgSrc) {
            event.src = this.errorImgSrc;
        }
    }
}
