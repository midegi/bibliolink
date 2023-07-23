import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showBookshelf: boolean = true; 
  private showBookfinder: boolean = false;
  private showAddbbook: boolean = false; 
  private subject = new Subject<any>();

  constructor() { }

  toggleBookshelf(): void {
    this.showBookshelf = true;
    this.showBookfinder = false;
    this.showAddbbook = false;
    this.subject.next([this.showBookshelf, this.showBookfinder, this.showAddbbook]);
  }

  toggleBookfinder(): void {
    this.showBookfinder = true;
    this.showBookshelf = false;
    this.showAddbbook = false;
    this.subject.next([this.showBookshelf, this.showBookfinder, this.showAddbbook]);
  }

  toggleBookAdd(): void {
    this.showBookfinder = false;
    this.showBookshelf = false;
    this.showAddbbook = true;
    this.subject.next([this.showBookshelf, this.showBookfinder, this.showAddbbook]);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

}
