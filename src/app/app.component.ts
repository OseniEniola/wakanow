import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {untilDestroyed} from 'ngx-take-until-destroy';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit, OnDestroy {
  title = 'wakanow';
  isLoading = false;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.pipe(untilDestroyed(this))
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.isLoading = true;
        }
        if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
          this.isLoading = false;
        }
      });
    // this.socketService.initializeConnection();
  }

  ngOnDestroy(): void {
  }
}
