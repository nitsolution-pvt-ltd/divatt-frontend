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
    if (!this.errorList.searchevent && keyword) {
      this.router.navigateByUrl("/collections/category/subcategory/"+keyword+'/subcategoryName').then(() => {
        // window.location.reload();
      }); 
    }else {
      this.checkValidtion('searchevent')
    }
  } 
  /* Validation check start */
  errorList: any = {};
  checkValidtion(fieldNAme: any) {
    console.log('fieldNAme');
    const onlyAB = /^[A-Z]+$/i;
    const emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    const numberRegex = '^[0-9]*$';
    const noSpacalchar = "^[a-zA-Z0-9 ]+$";
    const onlyAlpha = /\d+/g;
    const emptySpace = /^ *$/;

    if (fieldNAme == 'searchevent') {
      if (this.searchevent) {
        
        if (this.searchevent.match(noSpacalchar) == null) {
          this.errorList.searchevent = 'No special character are allowed';

        } else if(this.searchevent.match(emptySpace) !== null){
          this.errorList.searchevent = 'Empty Space not allowed';
        } else {
          this.errorList.searchevent = '';
        }
      } else {
        this.errorList.searchevent = 'Search anything you want';

      }
    }

  }
  /* Validation check end */
}
