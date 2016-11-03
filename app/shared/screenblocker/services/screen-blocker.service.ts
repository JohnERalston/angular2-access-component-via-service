import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class ScreenBlockerService {

    private spinSource = new Subject<string>();

    spin$ = this.spinSource.asObservable();

    spin(): void {
        this.spinSource.next();
    }

}