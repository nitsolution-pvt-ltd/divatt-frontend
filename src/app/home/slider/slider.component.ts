import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit,ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { ToastrService } from 'ngx-toastr';
import { fromEvent, Observable, Subscription } from 'rxjs';
import * as moment from 'moment';
import { HomeService } from 'src/app/services/home.service';import { environment } from 'src/environments/environment';
 '../../services/home.service';
declare var $: any;
const API_URL = environment.apiUrl;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent implements OnInit {

  // category : any=[{
  //   categoryName:'Designers',
  //   category:'Designer',
  //   categoryUrl:'https://t4.ftcdn.net/jpg/04/92/22/93/360_F_492229389_5ve1bCKgYrLRHpCj3o4FAzz60efaZgG0.jpg'
  // },{
  //   categoryName:'Men',
  //   category:'Men',
  //   categoryUrl:'https://t4.ftcdn.net/jpg/04/92/22/93/360_F_492229389_5ve1bCKgYrLRHpCj3o4FAzz60efaZgG0.jpg'
  // },{
  //   categoryName:'Women',
  //   category:'Women',
  //   categoryUrl:'https://t4.ftcdn.net/jpg/04/92/22/93/360_F_492229389_5ve1bCKgYrLRHpCj3o4FAzz60efaZgG0.jpg'
  // },{
  //   categoryName:'Kids',
  //   category:'Kid',
  //   categoryUrl:'https://t4.ftcdn.net/jpg/04/92/22/93/360_F_492229389_5ve1bCKgYrLRHpCj3o4FAzz60efaZgG0.jpg'
  // }]
  category : any = [];
	responsiveOptions;
  innerWidth: number;
  innerheight: any;
  private getBannerListSubscribe: Subscription;
  constructor(private router: Router, private route: ActivatedRoute,
    private http:HttpClient,private toastrService: ToastrService,
    private homeService:HomeService){
   
    // this.homeService.getCategoriesforCarousel().subscribe(category=>{
    //   this.category = category
    //   console.log(this.category)
    // })
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
    ];
  }
  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription
  public getScreenWidth: any;
  public getScreenHeight: any;
  currentDate: string = '';

  @HostListener('window:resize', ['$event'])
  ngOnInit() {
    let currentDate = Date.now()
    this.currentDate = moment(currentDate).format('YYYY-MM-DD');
    $.getScript('assets/js/menu.js');
    // console.log("Start");
    // console.log( this.innerWidth,this.innerheight);
    this.innerWidth = window.innerWidth;
    this.innerheight =window.innerHeight;
    // console.log( this.innerWidth,this.innerheight,window.innerHeight);
    this.resizeObservable$ = fromEvent(window, 'resize')
   
    this.resizeSubscription$ = this.resizeObservable$.subscribe( (evt:any) => {
      this.onResize(event)
       this.innerWidth = window.innerWidth;
      // console.log('event: ',evt.target.innerHeight, this.innerWidth)
      this.innerheight =evt.target.innerHeight;
    });
    this.getBannerList();
  }
  
  onResize(event) {
    event.target.innerWidth;
  }
  // getBannerList start
  api_url;
  getBannerList()
  {
    this.api_url = 'adminMData/bannerList';
    this.getBannerListSubscribe = this.http.get(API_URL+this.api_url).subscribe(
      (response:any) => { 
        
        this.category = [];
        for (let index = 0; index < response.data.length; index++) 
        {
          let enddate ,startdate;
          if(response.data[index].isActive)
          {
            enddate = moment(response.data[index].endDate).format('YYYY-MM-DD');
            startdate = moment(response.data[index].startDate).format('YYYY-MM-DD')
            var end = moment(enddate).isSame(this.currentDate);
            if(moment(this.currentDate).isSame(startdate) || moment(this.currentDate).isAfter(startdate))
            {
              if(moment(this.currentDate).isSame(enddate) || moment(this.currentDate).isBefore(enddate))
              {
                this.category.push(response.data[index]);  
              }
            }else if(response.data[index].endDate==null && response.data[index].startdate==null){
              this.category.push(response.data[index])
            }
          }else{
            this.category.splice(index, 1)
          }
        } 
      },(error)=>{
        this.toastrService.error(error.error.message);
      });
  }
  // getBannerList end
  // Slick slider config
  // public sliderConfig: any = {
  //   autoplay: true,
  //   autoplaySpeed: 5000,
  //   vertical: true,
  //   dots : true,
  //   infinite : false,
  //   arrows:false,
  //   // draggable:true,
  //   dotsClass:"slick-dots"
  //   // infinite: false,
  // };

  // Slick slider config
  public bannerSlideConfig: any = {
    infinite: true,
    centerMode: true, variableWidth: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots:true,
    autoplaySpeed: 3000,
    // nextArrow:"<div class='nav-btn next-slide ti-angle-right'></div>",
    // prevArrow:"<div class='nav-btn prev-slide ti-angle-left'></div>",
    
  };
  // ----------- destroy unsubscription start ---------
  ngOnDestroy() {
    if (this.getBannerListSubscribe !== undefined) {
      this.getBannerListSubscribe.unsubscribe();
    }
    
  }
  // ----------- destroy unsubscription end ---------  
}
