import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lendbook',
  templateUrl: './lendbook.component.html',
  styleUrls: ['./lendbook.component.css']
})
export class LendbookComponent {
  lent_to: string;
  @Output() submitName: EventEmitter<string> = new EventEmitter;
  
  constructor() { 
    this.lent_to = '';
  }
  
  onNameSubmit() {
    if(!this.lent_to) return;

    if (this.lent_to.length < 2 || this.lent_to.length > 45) return;
    if (!this.lent_to.match(/^[A-Za-zÀ-ÿ'-]+(?:\s+[A-Za-zÀ-ÿ'-]+)*(?:\s+[A-Za-zÀ-ÿ'-]+)?$/)) return;
    
    this.submitName.emit(this.lent_to); 
  }
}
