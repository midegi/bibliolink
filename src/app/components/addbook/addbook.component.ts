import { Component } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {
  // Attributo per ogni campo di input
  id: number;
  title: string;
  author: string;
  inputCheck: boolean;
  books!: Book[];
  isBookAdded: boolean;

  constructor(private LibraryService: LibraryService) { 
    this.id = 0;
    this.title = '';
    this.author = '';
    this.inputCheck = false;
    this.isBookAdded = false;

    try {
      this.LibraryService.fetchBooks().subscribe((result) => {
      this.books = JSON.parse(result) as Book[];
      });
    } catch (e: any) {
      console.error('Errore: ' + e.message);
    }
  }

  onTyping() {
    this.isBookAdded = false;
  }

  onAddBookEvent() {
    // Controlli sugli input
    if (!this.id || !this.title || !this.author) return;

    if (this.id == 0) return;
    if (this.id.toString().length < 1 || this.id.toString().length > 2) return;
    if (!this.id.toString().match(/[0-9]/)) return;

    if (this.title.length < 2 || this.title.length > 45) return;
    if (!this.title.match(/^[A-Za-zÀ-ÿ0-9\s&:;'"\[\]()!?.,+-]*$/)) return;

    if (this.author.length < 2 || this.author.length > 45) return;
    if (!this.author.match(/^[A-Za-zÀ-ÿ'-]+(?:\s+[A-Za-zÀ-ÿ'-]+)*(?:\s+[A-Za-zÀ-ÿ'-]+)?$/)) return;
    
    let available: boolean = true; 
    let lent_to: string = '';
    let date: Date;

    const newBook = new Book(this.id, this.title, this.author, available); 

    this.addBook(newBook); 
  }

  addBook(book: Book){
    try {
      let data: Book[] = this.books.slice();
      data.push(book);
      this.LibraryService.updateBooks(JSON.stringify(data)).subscribe((result) => {
        this.books.push(book);
        this.isBookAdded = true;
      });
      } catch (e: any) {
        console.error('Errore: ' + e.message);
      }
    }
}
