import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit, OnDestroy {
    step = 1;
    isSend = false;
    countdown = 60;
    timer = null;

    constructor() {
    }

    ngOnInit() {
    }

    ngOnDestroy(): void {
        clearInterval(this.timer);
    }

    sendVerifyCode() {
        this.isSend = true;
        this.countdown = 60;
        this.timer = setInterval(
            () => {
                this.countdown--;
                if (this.countdown === 0) {
                    clearInterval(this.timer);
                    this.isSend = false;
                    this.countdown = 60;
                }
            },
            1000
        );
    }

    nextStep(step: number) {
        if (step === 1) {
            this.step = 2;
        }
    }
}
