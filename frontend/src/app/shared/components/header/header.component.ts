import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userName;

  constructor(
    private readonly router: Router,
  ) { }

  ngOnInit() {
    this.userName = sessionStorage.getItem('name');
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

}
