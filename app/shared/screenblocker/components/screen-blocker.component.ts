import { Component } from '@angular/core';
import { ScreenBlockerService } from '../services/screen-blocker.service';

@Component({
    selector: 'screen-blocker',
    template: require('./screen-blocker.component.html'),
    styles: [require('./screen-blocker.component.css')]
})
export class ScreenBlockerComponent {
    blockUi: boolean = false;
    spinUi: boolean = false;

    constructor(
        private screenBlockerService: ScreenBlockerService
    ) {
        screenBlockerService.spin$.subscribe(() => {
            this.blockUi = true;
            this.spinUi = true;
            setTimeout(() => {
                this.blockUi = false;
                this.spinUi = false;
            }, 3000);
        });
    }
}