import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paginadeerror',
  templateUrl: './paginadeerror.component.html',
  styleUrls: []
})
export class PaginadeerrorComponent implements OnInit {
  errorMessage!:string;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.errorMessage = this.route.snapshot.data['message'];
  }

}
