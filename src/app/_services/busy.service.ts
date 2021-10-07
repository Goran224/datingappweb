import { Injectable } from '@angular/core';
import { NgxUiLoaderModule, NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
busyRequestCount = 0;

  constructor(private loaderService : NgxUiLoaderService) { }

  busy(){
    this.busyRequestCount++;
    this.loaderService.start()
  }
  idle(){
    this.busyRequestCount--;
    if(this.busyRequestCount <=0){
      this.busyRequestCount = 0;
      this.loaderService.stop();
    }
  }
}
