import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books = [
    {
      title: 'Design Patterns!',
      subtitle: 'Elements of Reusable Object-Oriented Software',
      isbn: '978-0-20163-361-0',
      abstract:
        'Capturing a wealth of experience about the design of object-oriented software, four top-notch designers present a catalog of simple and succinct solutions to commonly occurring design problems. Previously undocumented, these 23 patterns allow designers to create more flexible, elegant, and ultimately reusable designs without having to rediscover the design solutions themselves.',
      numPages: 395,
      author: 'Erich Gamma / Richard Helm / Ralph E. Johnson / John Vlissides',
      publisher: {
        name: 'Addison-Wesley',
        url: 'http://www.addison-wesley.de/'
      },
      id: '978-0-20163-361-0'
    },
    {
      title: 'REST und HTTP!!',
      subtitle: 'Entwicklung und Integration nach dem Architekturstil des Web',
      isbn: '978-3-86490-120-1',
      abstract:
        'Das Buch bietet eine theoretisch fundierte, vor allem aber praxistaugliche Anleitung zum professionellen Einsatz von RESTful HTTP. Es beschreibt den Architekturstil REST (Representational State Transfer) und seine Umsetzung im Rahmen der Protokolle des World Wide Web (HTTP, URIs und andere).',
      numPages: 330,
      author:
        'Stefan Tilkov / Martin Eigenbrodt / Silvia Schreier / Oliver Wolf',
      publisher: {
        name: 'dpunkt.verlag',
        url: 'http://dpunkt.de/'
      },
      id: '978-3-86490-120-1'
    },
    {
      title: 'Eloquent JavaScript',
      subtitle: 'A Modern Introduction to Programming',
      isbn: '978-1-59327-584-6',
      abstract:
        'JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.',
      numPages: 472,
      author: 'Marijn Haverbeke',
      publisher: {
        name: 'No Starch Press',
        url: 'https://www.nostarch.com/'
      }
    },
    {
      title: 'new title',
      isbn: 'ISBN-000'
    },
    {
      title: 'new book',
      isbn: 'me!',
      abstract: 'asasdasd',
      author: 'asdasd',
      id: 'me!'
    },
    {
      title: 'BOOK',
      isbn: 'AUTHOR'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
