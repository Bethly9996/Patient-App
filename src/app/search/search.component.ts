import { Component, OnInit } from '@angular/core';
import { SearchService } from '../Services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm:any;
  results:any = []

  constructor(private search:SearchService) { }

  onSubmit() {
    this.search.search(this.searchTerm).subscribe((res: any) => {
      this.results = res.results
      console.log(res)
    })
  }

  ngOnInit(): void {
  }

  enteredSearchValue: string = '';


}
