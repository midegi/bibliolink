import { Component } from '@angular/core';
import { UiService } from './services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bibliolink';
  showBookshelf: boolean = true; 
  showBookfinder: boolean = false;
  showAddbBook: boolean = false; 
  subscription!: Subscription;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(
      showattributes => {
        this.showBookshelf = showattributes[0];
        this.showBookfinder = showattributes[1];
        this.showAddbBook = showattributes[2];
      });
  }
}
