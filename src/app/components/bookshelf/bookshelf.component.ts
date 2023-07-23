import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent {
  books: Book[] = [];
   
  constructor(private LibraryService: LibraryService) { 

    try {
      this.LibraryService.fetchBooks().subscribe((result) => {
      this.books = JSON.parse(result) as Book[];
      });
    } catch (e: any) {
      console.error('Errore: ' + e.message);
    }
  }

}
