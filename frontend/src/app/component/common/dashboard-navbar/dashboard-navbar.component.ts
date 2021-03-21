import {Component, OnInit} from '@angular/core';
import {TokenStorageServiceService} from '../../../service/token/token-storage-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.css']
})
export class DashboardNavbarComponent implements OnInit {

  constructor(public tokenStorage: TokenStorageServiceService, private router: Router) {
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.tokenStorage.clear();
    this.router.navigate(['/']);
  }
}
