import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  buttonFlag: boolean = true;
  username: string;
  user: boolean;
  admin: boolean;
  // navbarOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    // console.log(e);
    var wrapper = document.querySelector("body");
    wrapper.classList.toggle("sb-sidenav-toggled");
  }

}
