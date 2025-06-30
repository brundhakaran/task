import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Task_1';
  
   toggleMenu: boolean = false;
  showMenu: boolean= false;
aboutMenu:boolean = false;
servicesMenu:boolean = false;
pagesMenu:boolean = false;
blogMenu:boolean = false;
ContactMenu:boolean = false;




  onToggleMenu() {
    this.toggleMenu = !this.toggleMenu;
  }
  

  
}
 
