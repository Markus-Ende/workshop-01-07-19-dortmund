import { Injectable } from '@angular/core';
import { BookDetailComponent } from './book-detail/book-detail.component';
import {
  CanDeactivate,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfirmCandeactivateGuard
  implements CanDeactivate<BookDetailComponent> {
  canDeactivate(
    component: BookDetailComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | import('@angular/router').UrlTree>
    | Promise<boolean | import('@angular/router').UrlTree> {
    return component.book$.pipe(
      first(),
      map(book => confirm(book.title + ' sicher?'))
    );
  }
}
