import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {
  myModel = true;

  constructor() { }

  ngOnInit(): void {
  }

}
