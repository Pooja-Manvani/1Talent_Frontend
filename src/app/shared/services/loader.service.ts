/**
 * @author Hrishikesh Patel
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
/**
 * LoaderService
 */
export class LoaderService {
  /** Loader status  */
  public status: BehaviorSubject<boolean>;

  constructor() {
    this.status = new BehaviorSubject<boolean>(false);
  }

  /** 
   * @name setLoader
   * @description emits loader status.
   */
  public setLoader(value: boolean): void {
    this.status.next(value);
  }
}
