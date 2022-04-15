import { Component, OnInit } from '@angular/core';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public title = '1Talent';

  public isLoading: boolean;

  constructor(private _loaderService: LoaderService) {
    this.isLoading = false;
  }

  ngOnInit(): void {
    this._loaderService.status.subscribe((res) => {
      this.isLoading = res;
    });
  }
}
