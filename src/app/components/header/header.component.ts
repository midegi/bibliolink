import { Component } from '@angular/core';
import { faBook, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'Bibliolink';
  faBook = faBook;
  faSearch = faSearch; // Icona di ricerca di Font-awesome 5
  faPlus = faPlus; // Icona di aggiunta di Font-awesome 5
  subscription!: Subscription;

  constructor(private uiService: UiService) { 
  }

  toggleBookshelf() {
    this.uiService.toggleBookshelf();
  }

  toggleBookfinder() {
    this.uiService.toggleBookfinder();
  }

  toggleAddBook() {
    this.uiService.toggleBookAdd();
  }

}
