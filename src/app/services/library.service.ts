import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable} from 'rxjs'
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  private API_KEY: string = "efc87b32";
  private API_URL: string = "https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint";
  private books: Book[] = [];

  constructor(private http:HttpClient) { }

  fetchBooks(): Observable<string> {
    return this.http.get<string>(`${this.API_URL}/get?key=${this.API_KEY}`);
  }

  updateBooks(books: string): Observable<string> { 
    return this.http.post<string>(`${this.API_URL}/set?key=${this.API_KEY}`, books);
  }
}

