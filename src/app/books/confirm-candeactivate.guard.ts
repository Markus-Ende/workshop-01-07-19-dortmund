import { Injectable } from '@angular/core';
import { BookDetailComponent } from './book-detail/book-detail.component';
import {
  CanDeactivate,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';

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
    const bookName = component.book.title;
    return confirm(bookName + ' sicher?');
  }
}
