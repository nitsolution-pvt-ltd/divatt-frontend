import { trigger, transition, style, animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ColorFilter, Product } from 'src/app/classes/product';
import { Filter } from 'src/app/widgets/filter/filter.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
 
  constructor(private http:HttpClient,private toastrService:ToastrService,private router: Router) { }
  searchevent:string;
  ngOnInit() {
   
  }
  searchText(keyword)
  {
    console.log("keyword",keyword);
    this.router.navigateByUrl("/collections/category/subcategory/"+keyword+'/subcategoryName').then(() => {
      // window.location.reload();
    }); 
  } 

}
