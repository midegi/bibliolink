import { Component} from '@angular/core';
import { Book } from 'src/app/models/Book';
import { LibraryService } from 'src/app/services/library.service';
import { faTimes, faBook, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-bookfinder',
  templateUrl: './bookfinder.component.html',
  styleUrls: ['./bookfinder.component.css']
})
export class BookfinderComponent {
  bookinfo: string;
  books!: Book[];
  lend_process: boolean;
  last_book_id: number | null = null;
  faTimes = faTimes;
  faBook = faBook;
  faArrowLeft = faArrowLeft;
  results: Book[] = [];

  constructor(private LibraryService: LibraryService) {
    this.bookinfo = '';
    this.lend_process = false;
  
    try {
      this.LibraryService.fetchBooks().subscribe((result) => {
      this.books = JSON.parse(result) as Book[];
      });
    } catch (e: any) {
      console.error('Errore: ' + e.message);
    }
  }

  onSearch(): void {
    this.realtimeSearch();
  }

  realtimeSearch(): void {
    // Filter the books array based on the search input
    this.results = this.books.filter(book => {
    return book.title.toLowerCase().includes(this.bookinfo.toLowerCase()) ||
         book.author.toLowerCase().includes(this.bookinfo.toLowerCase());
        });
  }

  onLendRequest(book: Book): void {
    this.lend_process = true; 
    this.last_book_id = book.id;
    console.log(this.results);
  }

  lendBook(lent_to: string): void {
    const index: number = this.books.findIndex(book => book.id === this.last_book_id);
    let currentBook: Book = this.books[index];
    
    // Get the current date and format it as day/month (e.g., 23/07)
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0'); // Add leading zero if necessary
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based

    let newBook = new Book(currentBook.id, currentBook.title, currentBook.author, false, lent_to, `${day}/${month}`);
    if (index > -1) this.books.splice(index, 1);
    this.books.push(newBook);

    try {
      this.LibraryService.updateBooks(JSON.stringify(this.books)).subscribe((result) => {
        console.log(result);
      });
    } catch (e: any) {
      console.error('Errore: ' + e.message);
    }

    const indexResults: number = this.results.findIndex(book => book.id === this.last_book_id);
    this.results[indexResults].available = false;
    this.results[indexResults].lent_to = lent_to;
    this.results[indexResults].date = `${day}/${month}`;

    this.lend_process = false;
  } 

  onRestitution(lent_book: Book) {
    const index: number = this.books.findIndex(book => book.id === lent_book.id);
    let currentBook: Book = this.books[index];
    let newBook = new Book(currentBook.id, currentBook.title, currentBook.author, true, '', '');
    if (index > -1) this.books.splice(index, 1);
    this.books.push(newBook);

    try {
      this.LibraryService.updateBooks(JSON.stringify(this.books)).subscribe((result) => {
        console.log(result);
      });
    } catch (e: any) {
      console.error('Errore: ' + e.message);
    }

    const indexResults: number = this.results.findIndex(book => book.id === lent_book.id);
    this.results[indexResults].available = true;
    this.results[indexResults].lent_to = '';
    this.results[indexResults].date = '';
  }
  
  onDelete(booktoDelete: Book): void {
    const index: number = this.books.findIndex(book => book.id === booktoDelete.id);;
    if (index > -1) this.books.splice(index, 1);
    
    try {
      this.LibraryService.updateBooks(JSON.stringify(this.books)).subscribe((result) => {
        console.log(result);
        this.results.splice(index, 1)});
      } catch (e: any) {
        console.error('Errore: ' + e.message);
      }
    }
}
