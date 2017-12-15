import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {

  public jokeContent = '';
  public saved = false;

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

  writeJoke(value) {
    this.jokeContent = value;
    this.saved = false;
  }

  saveContent() {
    console.log(this.jokeContent);
    this.jokeContent = '';
    this.saved = true;
  }
}
