import { Component } from '@angular/core';
import { ScreenBlockerService } from '../../shared/screenblocker/services/screen-blocker.service';

@Component({
    selector: 'pluto',
    template: require('./pluto.component.html')
})
export class PlutoComponent {

    constructor(
        private screenBlockerService: ScreenBlockerService
    ) {}

    spin(): void {
        console.log("Spinning");
        this.screenBlockerService.spin();
    }
    
}