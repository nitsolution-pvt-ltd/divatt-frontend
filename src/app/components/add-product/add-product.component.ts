import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { CommonUtils } from 'src/app/services/common-utils/common-utils';
import { HttpClient } from '@angular/common/http';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/services/auth/auth.service';
import * as moment from 'moment';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})

export class AddProductComponent implements OnInit, OnDestroy {
  
  @Output() changed = new EventEmitter<boolean>();
  private getCategoryListSubscribe: Subscription | undefined;
  private getSpecificationListSubscribe: Subscription | undefined;
  private getsubCategoryListSubscribe: Subscription | undefined;
  private getMesormentListSubscribe: Subscription | undefined;
  private getHSNListSubscribe: Subscription | undefined;
  private addProductSubcribe: Subscription | undefined;
  private getColorListSubscribe: Subscription | undefined;
  private getDesignerSubcribe: Subscription | undefined;
  loginDataSubscribe: any;
  weightUnit:string = 'kg';
  get_user_dtls: any;
  designerid: number | undefined;
  productdtl: any = { };
  hsnData: any;
  categoryslist: any;
  catName: any;
  specificationlist: any;
  standredSOH: any = [];
  size_list:string[] | undefined;
  sizes = [];
  mesormentList: any = [
    {name:'Free Size'},
    {name:'XS'},
    {name:'S'},
    {name:'M'},
    {name:'L'},
    {name:'XL'},
    {name:'XXL'},
    {name:'3XL'},
    {name:'4XL'},
    {name:'5XL'},
    {name:'6XL'},
  ];
  discountValueMax:string = '';
  selectedList: any = [];
  subcategorylist: any;
  save_subcategorylist: any;
  editextraspecification: boolean = false;
  catname: any;
  subcatname: any;
  subcatName: any;
  HSNlist:any =  [];
  withCustomizationReadonly = false;
  setData: any;
  btnloader: boolean = false;
  hsnsearchlist: any;
  colourlist: any;
  active: string = "";
  uplodeimgloader:boolean=false;
  frontImage: any;
  back: any;
  side: any;
  close: any;
  neck: any;
  image6: any;
  image7: any;
  image8: any;
  allData:any = {};
  addgift=false;
  userData: any;
  extraSpecifications:any={};
  imageArray : any = [];
  index: any;
  colour: any;
  productId: any;
  action: any;
  private getDesignerProductSubcribe: Subscription | undefined;
  dateRange:any;
  productDisabled = false;
  tab: string = '';
  constructor(
    private authService:LoginService,
    private commonUtils:CommonUtils,
    private router:Router,
    private http:HttpClient,
    private toastrService: ToastrService,
    config: NgbCarouselConfig,private activatedRoute: ActivatedRoute,
  ) { 
    config.interval = 0;
    config.keyboard = true;
    config.wrap = true;
    config.pauseOnHover = true;
  }

  discountTypelist=[
    {id:1,name:"Flat"},
    {id:2,name:"Percentage"},
    {id:3,name:"None"}
  ]
  pricetyplist=[
    {id:1,name:"Without Tax"},
    {id:2,name:"Inclusive Tax"}
  ]
  ngOnInit() {    
    this.productdtl.priceType = "Inclusive Tax";
    this.dateRange =  moment(new Date()).format('YYYY-MM-DD');
  }
  ngAfterViewInit() {
    this.commonFunction();
  }
  // commonFunction start

  commonFunction()
  {
    this.productdtl.purchaseMinQuantity = 1;
    this.productdtl.cod = false;
    this.productdtl.withCustomization = false;
    this.productdtl.withDesignCustomization = false;
    this.productdtl.returnAcceptable = false;
    this.productdtl.cancelAcceptable = false;
    this.productdtl.withGiftWrap = false;
    this.productdtl.inddiscountType = 'None';
    this.productdtl.inddiscountValue = 0;
    this.productdtl.salePrice = 0;
    this.productId = this.activatedRoute.snapshot.params['id'];
    this.action = this.activatedRoute.snapshot.params['action'];
    
    this.loginDataSubscribe = this.authService.globalparamsData.subscribe((res:any) => {
      if(res != null || res != undefined){
        this.get_user_dtls = res.logininfo;
        // user details set
        this.designerid = this.get_user_dtls.uid;
        // this.getcategoryList();
        // this.getHSNlist('');
        // this.getColorList();
        // this.getdesignerById();
        this.getDesignerProfiledata();
        this.http.get("designer/"+this.designerid).subscribe(
          (res:any) => {
            // if(res.isProfileCompleted == true && res.profileStatus == 'COMPLETED' || res.isProfileCompleted == true && res.profileStatus == 'SUBMITTED' || res.isProfileCompleted == true &&  res.profileStatus == 'SAVED')
          if(res.isProfileCompleted == true && res.profileStatus!= 'REJECTED')    
              {
                this.getcategoryList();
                this.getHSNlist('','');
                this.getColorList();
                this.getdesignerById();
                if(this.action == 'add')
                {
                  this.productdtl.cod = false;
                  this.productdtl.withCustomization = false;
                  this.productdtl.withDesignCustomization = false;
                  this.productdtl.returnAcceptable = false;
                  this.productdtl.cancelAcceptable = false;
                  this.productdtl.withGiftWrap = false;
                  this.productdtl.inddiscountType = 'None';
                  this.productdtl.inddiscountValue = 0;
                }
                else{
                  setTimeout(() => {
                    this.getProductById();
                  }, 300);
                }
                
              }else
              {
                this.router.navigateByUrl('/profile-complete');
      
              }
              if(res.isDeleted)
              {
                this.authService.logout()
              }
          },
          (error) =>{
          })
        this.commonUtils.onClicksigninCheck(res);
      }
    });
    
  }
  clearImage(index:number)
  {
    this.imageArray.splice(index,1);
    console.log(this.imageArray);
    
  }
    // getDesignerProfiledata for check perpession start
getDesignerProfiledata()
{
  
  this.http.get("designer/"+this.designerid).subscribe(
    (res:any) => {
      if(res.profileStatus == 'COMPLETED')
      {
        this.userData = res;
      }else
      {
        let pageUrl = this.router.url.split("/");
        if(pageUrl[1] == 'add-designer-product')
        {
          this.toastrService.error('error',"Sorry ! You don't have any permission on product.");
          this.router.navigateByUrl('/error');
        }
      }
      
      console.log("this.userData",this.userData);
      
    },
    (error) =>{
    })
}
// getDesignerProfiledata for check perpession  end
  // getcatById start
  getdesignerById()
  {
    this.getDesignerSubcribe = this.http.get("designer/"+this.designerid).subscribe(
      (res:any) => {
        this.userData = res;
        
      },
      (error) => {
        
      }
    )
  }
  // getcatById end

   // changeDateFormat start
   changeDateFormat(identifier: any,date: any)
   {
    console.log(date);
    
     if(identifier == 'indealstart')
     {
       this.productdtl.indealstart= moment(date).format('YYYY/MM/DD');
       console.log(this.productdtl.indealstart,date);
       
     }else if(identifier == 'indealend')
     {
       this.productdtl.indealend= moment(date).format('YYYY/MM/DD');
       console.log(this.productdtl.indealend,date);
       
     }
   }
   // changeDateFormat end

   /*------Sale price calculation start------*/
  // oldmrp;
  selectChangeDiscount()
  {
    this.productdtl.inddiscountValue = 0;
  }
  // o_mrp
  salePriceCalculation(amount: number,discountType: any,mrp: number,discountValue: number,identifier: any){
    console.log(amount,discountType,mrp,discountValue);
    
      // this.productdtl.indmrp = amount;
    
      if(!discountValue)
      {
        discountValue = 0;
      }else{
        this.productdtl.indealPriceError = false
      }

      var taxValue = (this.hsnData.taxValue * this.productdtl.amount) / 100;
      var taxValue2;
      console.log('this.productdtl.amount',taxValue,this.productdtl.amount);
      
      this.productdtl.salePrice = parseInt((taxValue + this.productdtl.amount).toFixed(0));
      // this.productdtl.discountSalePrice = parseInt((taxValue + this.productdtl.discountAmount).toFixed(0));
      this.productdtl.indmrp = parseInt((taxValue + this.productdtl.amount).toFixed(0));
      if(discountType == 'Flat')
      {
        // this.productdtl.inddiscountValue = 0;
        console.log(taxValue,this.productdtl.discountAmount);
        
          // this.productdtl.discountSalePrice = parseInt((this.productdtl.indmrp - discountValue).toFixed(0));
          this.productdtl.discountAmount = parseInt((this.productdtl.amount - discountValue).toFixed(0));
          // taxValue2 = this.productdtl.discountAmount * this.hsnData.taxValue + this.productdtl.discountAmount
          this.productdtl.discountSalePrice = parseInt((((this.productdtl.discountAmount * this.hsnData.taxValue) / 100) + this.productdtl.discountAmount).toFixed(0));
          console.log("taxValue",taxValue,this.productdtl.discountAmount,this.productdtl.discountSalePrice);
          this.productdtl.taxAmount = ((this.productdtl.discountAmount * this.hsnData.taxValue) / 100).toFixed(0);
          if(discountValue > this.productdtl.indmrp || discountValue > this.productdtl.amount)
          {
            this.productdtl.discountAmount = this.productdtl.amount;
            this.productdtl.indealPriceError = "Discount value is higher than sale price."
            this.productdtl.inddiscountValue = 0;
            this.productdtl.discountSalePrice = this.productdtl.indmrp;     
          }
          else{
            this.productdtl.indealPriceError = "";
          }

      }else if(discountType == 'Percentage')
      {
          // this.productdtl.inddiscountValue = 0;
          this.productdtl.discountAmount = parseInt((this.productdtl.amount - ((this.productdtl.inddiscountValue  * this.productdtl.amount) / 100)).toFixed(0));
          this.productdtl.discountSalePrice = parseInt((((this.productdtl.discountAmount * this.hsnData.taxValue) / 100) + this.productdtl.discountAmount).toFixed(0));
          this.productdtl.taxAmount = ((this.productdtl.discountAmount * this.hsnData.taxValue) / 100).toFixed(0);
          if(discountValue > 100)
          {
            this.productdtl.indealPriceError = "Discount value can't give more than 100%."
            this.productdtl.discountSalePrice = this.productdtl.indmrp;
            this.productdtl.inddiscountValue = 0;
            
          }else{
            this.productdtl.indealPriceError = ""
          }

      }else if(discountType == "None"){
          this.productdtl.inddiscountValue = 0;
          taxValue = (this.hsnData.taxValue * this.productdtl.amount) / 100;
          this.productdtl.indmrp = parseInt((taxValue + this.productdtl.amount).toFixed(0));
          this.productdtl.salePrice = (taxValue + this.productdtl.amount).toFixed(0);
          this.productdtl.discountSalePrice = 0;
          this.productdtl.indealstart = null;
          this.productdtl.indeal_start = null;
          this.productdtl.indealend = null;
          this.productdtl.indeal_end = null;
          this.productdtl.taxAmount = taxValue;

      }
    // indiaPrice  end
   console.log(mrp);
   
  }
  /*Sale price calculation end*/

  ngsel(id: any)
  {
    // console.log("select price type...", id);
  }

  // getcategoryList start
  getcategoryList()
  {
    this.getCategoryListSubscribe = this.http.get("category/getCategoryList").subscribe(
      (res:any) => {
        this.categoryslist = res;
        // this.toastrService.success(res.message);
      },
      (error) =>{
        this.toastrService.error(error.message);
      })
  }
  // getcategoryList end

  customization1(value: any){
    console.log(value);
    var data:any= 
    [{name:'Free Size'},{name:'XS'},{name:'S'},{name:'M'},{name:'L'},{name:'XL'},
    {name:'XXL'},{name:'3XL'},{name:'4XL'},{name:'5XL'},{name:'6XL'}];
     if(value == true){
      for(let i = 0; i< this.mesormentList.length; i++)
      {
        if(this.mesormentList[i].name != 'Free Size')
        {
          
        }
        else{
          this.mesormentList.splice(i,1);
        }
      }
      this.productdtl.sizes = null;
    }else{
      this.productdtl.sizes = null;
      this.mesormentList = data;
    }    
  }
   //getColorList start 
   getColorList()
   {
     this.getColorListSubscribe = this.http.get("adminMData/coloreList").subscribe(
       (res:any) => {
        //  console.log("color list.....",res);
         this.colourlist = res;
       },
       (error) =>{
         this.toastrService.error(error.message);
       })
   }
   //getColorList end
  changeColor(value: any){
    // console.log("color...", value);
    this.active = value;
    this.colour = value;
  }

  categorySelected(cat_id: any, calltype: any){

    for (let i = 0; i < this.categoryslist.length; i++) {
      if(cat_id == this.categoryslist[i].id){
        this.catName = this.categoryslist[i].categoryName;
      }
    }
    console.log("category name after...",this.catName);
    console.log("category id...",cat_id);
    console.log("category value...",calltype);
    if(calltype == 'onchange')
    {
      this.productdtl.subCategoryId = null;
      this.specificationlist = null;
      this.standredSOH = [{}]
      // this.mesormentList = [];
      this.selectedList = []
      this.editextraspecification = false;
      if(cat_id)
      {
        this.getSpecification(cat_id);
    
        this.getsubCategoryListSubscribe = this.http.get("subcategory/getAllSubcategory/"+cat_id).subscribe(
          (res:any) => {
            console.log("res",res);
            this.subcategorylist = res;
            console.log("subcategory list....",this.subcategorylist);
          },
          (error) =>{
            this.toastrService.error(error.message);
          })
      }
      
    }else if(calltype == 'onload')
    {
      console.log("calltype",calltype);
      if(cat_id)
      {
        this.getSpecification(cat_id);
    
        this.getsubCategoryListSubscribe = this.http.get("subcategory/getAllSubcategory/"+cat_id).subscribe(
          (res:any) => {
            console.log("res",res);
            this.subcategorylist = res;
            this.save_subcategorylist = res;
            // this.getMesormentList('onload');
            
          },
          (error) =>{
            this.toastrService.error(error.message);
          })
      }
     
    }
      this.subcategorylist = [];
      this.specificationlist = null;
    
  }
  SubcatSelected(subcat_id: any, calltype: any)
  {
    for (let i = 0; i < this.categoryslist.length; i++) {
      if(subcat_id == this.subcategorylist[i].id){
        this.subcatName = this.subcategorylist[i].categoryName;
      }
    }
    this.subcatname = this.subcatName;
    this.standredSOH = [{}];
    // this.mesormentList = [];
    this.selectedList = [];
    // this.getMesormentList('onchange') 
  }
  // Specification get start
  getSpecification(cat_id: any){
    this.getSpecificationListSubscribe = this.http.get("specification/listOfSpecification/"+cat_id).subscribe(
      (res:any) => {
        console.log("res",res);
        this.specificationlist = res
        console.log("this.specificationlist",this.specificationlist);
        console.log("Len",this.specificationlist.name);
        
      },
      (error) =>{
        console.log("error",error);
      })
  }
  // Specification get end
  // get HSN list start
  search:string = '';
  getHSNlist(key: any,identifier:any)
  {
    console.log('key',key);
    
    if(identifier == 'search')
    {

    }
    this.getHSNListSubscribe = this.http.get("hsn/getactiveHSNList?searchKeyword="+key).subscribe(
      (res:any) => {
        console.log("res",res);
        this.HSNlist = res;

        // this.hsnsearchlist = this.HSNlist;
        // console.log("HSNlist...",this.HSNlist);
       
      },
      (error) =>{
        // console.log("error",error);
        // this.commonUtils.presentToast('error', error.error.message);


      })
  }
  // get HSN list end
  // hsnSelected start
  hsnSelected(hsndata: any)
  {
    console.log("hsndata",hsndata);
    
    this.hsnData = hsndata
    // if(hsndata == undefined)
    // {
    //   this.productdtl.amount = '';
    //   this.productdtl.indmrp = '';
    //   this.productdtl.salePrice = '';
    //   this.productdtl.inddiscountType = 'None';
    //   this.productdtl.inddiscountValue = '';
    // }
    this.productdtl.amount = 0;
    this.productdtl.indmrp = 0;
    this.productdtl.salePrice = 0;
    this.productdtl.inddiscountType = 'None';
    this.productdtl.inddiscountValue = 0;
  }
  // hsnSelected end
  onKey(value: any) { 
    // console.log("search Data...", value.value);
    // this.search(value.value);
  }
setval(data: any)
{
  this.setData=data;
}
toggleSizes(val: any) {
  this.sizes = val;
  for (let index = 0; index < this.sizes.length; index++) {
    if(this.sizes[index] == 'Free Size')
    {
      this.productdtl.withCustomization = false;
      this.withCustomizationReadonly = true;
    }else {
      // this.withCustomizationReadonly = false;

    }
    console.log(this.sizes[index]);
    
  }
  console.log(this.sizes,this.withCustomizationReadonly);
  }

addImage(){

}

  /* -----------Image uploading start----------- */
  uploder = false;
  fileField:any;
  handleInputChange(e: any, index: any,chosetype:any) {
    this.uploder = true;
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var name = e.target.files[0].name;
    var type = e.target.files[0].type;
    var size = e.target.files[0].size;
    let f_size = e.target.files[0].size/1024/1024;
    console.log('type',type+ "\n",'size',size,f_size+ "\n",'name',name+ "\n");
    if (e.target.files[0].size/1024/1024 > 10) {
      this.toastrService.error('Image size is bigger than 10MB');
      this.uploder= false;
      this.uplodeimgloader = false;
      return;
     }
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      this.uploder= false;
      this.uplodeimgloader = false;
      this.toastrService.error('invalid format');
      return;
    }
    this.uplodeimgloader = true;
    var fd = new FormData();
    fd.append("file", e.target.files[0]); 
     
    

    this.index = this.imageArray.length;
    // console.log("index Data...", this.index,this.imageArray);
    
    // this.imageArray.push(null);
    
    this.productdtl.front = this.frontImage;
      // console.log("this.frontImage",this.productdtl.front);
      this.http.post("admin/profile/s3/upload",fd).subscribe(
        (res:any) => {
          this.frontImage = res.path;
            this.uploder = false;
          // this.imageArray.push(e.target.files[0]);
          console.log(type,index);
          
          if(chosetype == 'change')
          {
            this.imageArray[index]= {"isPrimary": false,large: res.path, "medium": "string","order": 2,"tiny": "string"};
          }else
          {
            this.imageArray.push({"isPrimary": false,large: res.path, "medium": "string","order": 2,"tiny": "string"});          
          }
          this.imageArray[0].isPrimary = true;          
          this.uploder = false;
          this.uplodeimgloader = false;
        },
        (error) =>{
          this.uplodeimgloader = false;
          this.toastrService.error(error.error.message);
          this.uploder = false;
      })
      console.log('index',this.imageArray,index);
  }
  /* Image uploading end */
  
// form submit start
onSubmitProductAdd(form:NgForm)
{
  // console.log("this.SOH",form.value,this.standredSOH);
  
  var deal = {
    dealStart:form.value.indealstart,
    dealEnd:form.value.indealend,
    salePrice:form.value.discountSalePrice,
    dealType:form.value.inddiscountType,
    dealValue:form.value.inddiscountValue,
    dealName:'',
    taxAmount:this.hsnData
    // dealName:form.value.dealName
  }
  if(form.value.discountSalePrice == null || form.value.discountSalePrice == undefined)
  {
    deal.salePrice = null;
  }

 
  
  // create small objects end
 var productDetails = {
  composition:form.value.composition,
  fittingInformation:form.value.fittingInformation,
  occation:form.value.occation,
  productDescription:form.value.productDescription,
  productName:form.value.productName,
  washingInformation:form.value.washingInformation,
 }
var standeredSOH = this.standredSOH;

 
//  if(this.addgift == false)
//   {
    
   
    console.log(this.allData);
    
    if(this.action == 'add')
    {
      this.allData = 
      {
        sizes:form.value.sizes,
        cancelAcceptable:form.value.cancelAcceptable,
        categoryId:form.value.categoryId,
        subCategoryId:form.value.subCategoryId,
        designerId:this.userData.designerId,
        designerName:this.userData.designerProfile.firstName1 +' '+this.userData.designerProfile.lastName1,
        colour: this.colour,
        deal:deal,
        "extraSpecifications": {
          "sleeve": "",
          "sleeveLength": ""
        },
        "productStage": "",
        "productStageDetails": {
            "approvedBy": "",
            "approvedOn": null,
            "comment": null,
            "submittedBy": this.userData.designerName,
            "submittedOn": null
        },
        mrp:form.value.indmrp,
        customizationSOH:form.value.customizationSOH,
        gender:form.value.gender,
        customization:form.value.customization,
        cod:form.value.cod,
        notify:form.value.notify,
        soh:form.value.soh,
        giftWrap:form.value.giftWrap,
        weightUnit:this.weightUnit,
        purchaseMaxQuantity:form.value.purchaseMaxQuantity,
        purchaseMinQuantity:form.value.purchaseMinQuantity,
        priceType:form.value.priceType,
        taxInclusive:form.value.taxInclusive,
        taxPercentage:form.value.taxPercentage,
        images:this.imageArray,
        returnAcceptable:form.value.returnAcceptable,
        oos:10,
        priceCode:'not',
        productDetails:productDetails,
        hsnCode:this.hsnData.hsnCode,
        giftWrapAmount:form.value.giftWrapAmount,
        shipmentTime:form.value.shipmentTime,
        productWeight:form.value.productWeight,
        withDesignCustomization:form.value.withDesignCustomization,
        withCustomization:form.value.withCustomization,
        withGiftWrap:form.value.withGiftWrap,
        designCustomizationFeatures:form.value.designCustomizationFeatures,
      }
      this.addProductSubcribe = this.http.post('designerProducts/addProduct', this.allData).subscribe((res:any) =>{
        this.btnloader = false;
        // form.reset();
        this.toastrService.success(res.message);
        this.router.navigateByUrl("home");
        },error =>{
          // console.log(error);
          this.btnloader = false;
          this.toastrService.error(error.message);
      }) 
    }
    else{
      this.allData = 
      {
        sizes:form.value.sizes,
        cancelAcceptable:form.value.cancelAcceptable,
        categoryId:form.value.categoryId,
        subCategoryId:form.value.subCategoryId,
        designerId:this.userData.designerId,
        designerName:this.userData.designerProfile.firstName1 +' '+this.userData.designerProfile.lastName1,
        colour: this.colour,
        deal:deal,
        "extraSpecifications": {
          "sleeve": "",
          "sleeveLength": ""
        },
        productStage: this.productdtl.productStage,
        productStageDetails: this.productdtl.productStageDetails,
        mrp:form.value.indmrp,
        customizationSOH:form.value.customizationSOH,
        gender:form.value.gender,
        customization:form.value.customization,
        cod:form.value.cod,
        notify:form.value.notify,
        soh:form.value.soh,
        giftWrap:form.value.giftWrap,
        purchaseMaxQuantity:form.value.purchaseMaxQuantity,
        purchaseMinQuantity:form.value.purchaseMinQuantity,
        weightUnit:this.weightUnit,
        priceType:form.value.priceType,
        taxInclusive:form.value.taxInclusive,
        taxPercentage:form.value.taxPercentage,
        images:this.imageArray,
        returnAcceptable:form.value.returnAcceptable,
        oos:10,
        priceCode:'not',
        productDetails:productDetails,
        hsnCode:this.hsnData.hsnCode,
        giftWrapAmount:form.value.giftWrapAmount,
        shipmentTime:form.value.shipmentTime,
        productWeight:form.value.productWeight,
        withDesignCustomization:form.value.withDesignCustomization,
        withCustomization:form.value.withCustomization,
        withGiftWrap:form.value.withGiftWrap,
        designCustomizationFeatures:form.value.designCustomizationFeatures,
      }
      this.addProductSubcribe = this.http.put('designerProducts/updateProduct/'+this.productId, this.allData).subscribe((res:any) =>{
        this.btnloader = false;
        // form.reset();
        this.toastrService.success(res.message);
        this.router.navigateByUrl("home");
        },error =>{
          // console.log(error);
          this.btnloader = false;
          this.toastrService.error(error.message);
      }) 
    }
         
 
 
}
// form submit end
// getProductById start
getProductById(){
  this.getDesignerProductSubcribe = this.http.get("designerProducts/productList/"+this.productId).subscribe(
    (res:any) => {
      // this.productdtl = res;
      this.categorySelected(res.categoryId,'onload');
      this.productdtl = {
        indmrp:res?.mrp,
        amount:parseInt((( 100 * res?.mrp) / ( 100 + res?.deal?.taxAmount?.taxValue)).toFixed(0)),
        discountAmount:parseInt((( 100 * res?.deal?.salePrice) / ( 100 + res?.deal?.taxAmount?.taxValue)).toFixed(0)),
        productStageDetails:res?.productStageDetails,
        productStage:res?.productStage,
        salePrice:res?.mrp,
        discountSalePrice:res?.deal?.salePrice,
        indealend:res?.deal?.dealEnd,
        indealstart:res?.deal.dealStart,
        inddiscountType:res?.deal?.dealType,
        inddiscountValue:res?.deal?.dealValue,
        hsnData:res?.hsnCode,
        categoryId:res?.categoryId,
        subCategoryId:res?.subCategoryId,
        productName:res?.productDetails?.productName,
        composition:res?.productDetails?.composition,
        fittingInformation:res?.productDetails?.fittingInformation,
        productDescription:res?.productDetails?.productDescription,
        washingInformation:res?.productDetails?.washingInformation,
        occation:res?.productDetails?.occation,
        productWeight:res?.productWeight,
        purchaseMaxQuantity:res?.purchaseMaxQuantity,
        purchaseMinQuantity:res?.purchaseMinQuantity,
        returnAcceptable:res?.returnAcceptable,
        cod:res?.cod,
        withCustomization:res?.withCustomization,
        withDesignCustomization:res?.withDesignCustomization,
        withGiftWrap:res?.withGiftWrap,
        shipmentTime:res?.shipmentTime,
        cancelAcceptable:res?.cancelAcceptable,
        designCustomizationFeatures:res?.designCustomizationFeatures,
        giftWrapAmount:res?.giftWrapAmount,
        notify:res?.notify,
        oos:res?.oos,
        priceCode:res?.priceCode,
        priceType:res?.priceType,
        soh:res?.soh,
        sizes:res?.sizes,
        colour:res?.colour,
      }
      if(res?.deal?.dealType != 'None')
      {
        if(res?.deal?.salePrice < this.productdtl.discountAmount)
        {
          this.productdtl.taxAmount = (this.productdtl.discountAmount - res?.deal?.salePrice)
        }
        else
        {
          this.productdtl.taxAmount = (res?.deal?.salePrice - this.productdtl.discountAmount)
        }
      }
      else{
        this.productdtl.taxAmount = (res?.mrp - this.productdtl.amount);
      }
      var data:any= 
    [{name:'XS'},{name:'S'},{name:'M'},{name:'L'},{name:'XL'},
    {name:'XXL'},{name:'3XL'},{name:'4XL'},{name:'5XL'},{name:'6XL'}];
      if(res.withCustomization)
      {
        this.mesormentList = data;
      }
      this.productdtl.indealstart = res.deal.dealStart;
      this.productdtl.indealend = res.deal.dealEnd;
      this.weightUnit = res.weightUnit;
      console.log("weightUnit",res.weightUnit);
      
    this.productdtl.indeal_start = moment(res.deal.dealStart).format('YYYY-MM-DD');
    this.productdtl.indeal_end = moment(res.deal.dealEnd).format('YYYY-MM-DD');
    
      this.active = res.colour;
      this.colour = res.colour;
      if(res.adminStatus == "Pending" || res.adminStatus == "Rejected")
      {
        this.productDisabled = false;
        this.tab = '0';

      }else{
        this.productDisabled = true;
        this.tab = '-1';
      }
      // console.log("HSNlist",this.HSNlist,this.HSNlist.length);
      
      for (let index = 0; index < this.HSNlist.length; index++) {
        if(this.HSNlist[index].hsnCode == res.hsnCode)
        {
          this.productdtl.hsnData =  this.HSNlist[index]
          this.hsnData = this.HSNlist[index];
          //  console.log("MATCH",this.HSNlist[index]);
        }
          //  console.log("MATCH",this.HSNlist[index],this.HSNlist[index].hsnCode,res.hsnCode);

      }
      this.imageArray = res.images;
      console.log("productdtl",this.productdtl);
      
    },
    (error) => {
      
    }
  )
}
// getProductById end
changeDiscountType()
{
  console.log("CHANGE");
  
}
ChangeWeight()
{
  console.log("ChangeWeight");
  
}
  // ngOnDestroy start
  ngOnDestroy() {
    if(this.getCategoryListSubscribe !== undefined){
      this.getCategoryListSubscribe.unsubscribe();
    }
    if(this.getSpecificationListSubscribe !== undefined){
      this.getSpecificationListSubscribe.unsubscribe();
    }
    if(this.getsubCategoryListSubscribe !== undefined){
      this.getsubCategoryListSubscribe.unsubscribe();
    }
    if(this.getMesormentListSubscribe !== undefined){
      this.getMesormentListSubscribe.unsubscribe();
    }
    if(this.getHSNListSubscribe !== undefined){
      this.getHSNListSubscribe.unsubscribe();
    }
    if(this.addProductSubcribe !== undefined){
      this.addProductSubcribe.unsubscribe();
    }
    if(this.getColorListSubscribe !== undefined){
      this.getColorListSubscribe.unsubscribe();
    }
    if(this.getDesignerSubcribe !== undefined){
      this.getDesignerSubcribe.unsubscribe();
    }
    if(this.getDesignerProductSubcribe !== undefined){
      this.getDesignerProductSubcribe.unsubscribe();
    }
  }  
  // ngOnDestroy end

 

}
