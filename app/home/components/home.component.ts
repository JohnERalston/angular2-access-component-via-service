import { Component } from '@angular/core';
import { ScreenBlockerService } from '../../shared/screenblocker/services/screen-blocker.service';

@Component({
    selector: 'home',
    template: require('./home.component.html')
})
export class HomeComponent {
    
    constructor(
        private screenBlockerService: ScreenBlockerService
    ) {}

    spin(): void {
        console.log("Spinning");
        this.screenBlockerService.spin();
    }
}