import { Component, input, Output} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { EventEmitter } from '@angular/core';
import { eventNames } from 'process';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatInputModule,MatButtonModule,FormsModule,RouterLink,RouterModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Output() search=new EventEmitter<string>();
 onSearch(){
  console.log("onSearch Called")
  this.search.emit();
 }
text="";

}
