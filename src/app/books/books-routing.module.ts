import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { BooksComponent } from './books/books.component';
import { ConfirmCandeactivateGuard } from './confirm-candeactivate.guard';
import { BookEditComponent } from './book-edit/book-edit.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      {
        path: '',
        component: BookListComponent
      },
      {
        path: ':isbn',
        component: BookDetailComponent,
        canDeactivate: [ConfirmCandeactivateGuard]
      },
      {
        path: ':isbn/edit',
        component: BookEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {}
