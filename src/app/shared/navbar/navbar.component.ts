import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() naviagate: EventEmitter<any> = new EventEmitter<any>();
  @Input() currentSection: string;
  constructor() {
    console.log(this.currentSection)
   }

  ngOnInit(): void {
  }

  /**
   * Window scroll method
   */

  public navigate(data): void {
    this.naviagate.emit(data);
}


  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      navbar.style.backgroundColor = '#272a33';
      navbar.style.padding = '10px';
    } else {
      navbar.style.backgroundColor = '';
      navbar.style.padding = '20px';
    }
  }

    /**
   * Toggle navbar
   */
  toggleMenu() {
    document.getElementById('navbarCollapse').classList.toggle('show');
  }
}
