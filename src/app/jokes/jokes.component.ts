import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(
      (queryParam) => { console.log('Jokes queryParam' + queryParam); }
    );
    this.activeRoute.params.subscribe(
      (params) => { console.log('Jokes activeRoute.params' + params); }
    );
  }

}
