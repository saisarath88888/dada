import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class FeedbackComponent {
  saveForm(myform: any): void {
    console.log(myform);
  }
}
export class HomeComponent {

}

