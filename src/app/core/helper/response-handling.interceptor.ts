import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { MessageTitles } from '../models/interceptor.model';

@Injectable()
/**
 *@auther Tanmay Patel, Sneha Mistry
 *@description Handling the Error response in interceptor
 */
export class ResponseHandlingInterceptor implements HttpInterceptor {

  /** Variable for showing the toaster title  */
  private title : string = '';

  /** Variable for showing the toaster message */
  private message : string = ''
  
  /**
   * 
   * @param toaster Inject the ngx-toaster service for showing toaster 
   */
  constructor(private toaster : ToastrService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((errorResponse: HttpErrorResponse) => {
        
        // get title of toaster
        this.title = MessageTitles.Error;
        if (errorResponse && errorResponse.error instanceof ErrorEvent) {
          this.message = `Error : ${errorResponse.error}`;
        }
        else {
          if (errorResponse instanceof HttpErrorResponse) {
            switch (errorResponse.status) {
              /**
               * handle all the API response from the error status code
               */
              case 204:
                this.message = errorResponse.statusText;
                break;
              case 400:
                this.message = errorResponse.statusText;
                break;
              case 401:
                this.message = errorResponse.statusText;
                break;
              case 404:
                this.message = errorResponse.statusText;
                break;
              case 500:
                this.message = errorResponse.statusText;
                break;
            }
          }
        }
        //show the errors using toaster
        this.toaster.error(this.message, this.title);
        return of()
      })
    );
    
  }
}
