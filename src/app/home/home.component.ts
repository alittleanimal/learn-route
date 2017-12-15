import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationStart } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    public activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.router.events.subscribe((event) => {
    //   console.log('event: ' + event);
    //   console.log('NavigationStart' + (event instanceof NavigationStart));
    // });
    this.activeRoute.params.subscribe(
      (parmas) => { console.log('home ngOnInit activeRoute.params' + parmas); }
    );
  }

  public manualNav(): void {
    this.router.navigate(['/jokes'], { queryParams: { page: 1, name: 222}});
  }
}
