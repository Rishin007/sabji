import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'products';
  name = 'oindrila';
  amount:number=12346.26;
  demo()
  {
    alert("I am a Function!!!")
  }
}

