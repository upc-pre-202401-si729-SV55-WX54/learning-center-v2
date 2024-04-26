import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent implements OnInit {
  invalidUrl: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.invalidUrl = '';
  }

  // UI Event Handlers

  onNavigateHome() {
    this.router.navigate(['home']).then();
  }

  // Component Lifecycle Event Handlers
  ngOnInit(): void {
    this.invalidUrl = this.route.snapshot.url[0].path;
  }

}
