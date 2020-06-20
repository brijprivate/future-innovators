import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GlobalService } from 'src/app/global/global.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  formmodel:any={}
  constructor(private global:GlobalService, private toastr: ToastrService, ) { }

  ngOnInit() {
  }
  onFormSubmit(form){
 
    this.global.sendmail(form).subscribe((result:any)=>{
      console.log(result);
      if(result.error){
        this.toastr.warning(result.message);

      }
      else{
        this.toastr.success(result.message);

      }

    }
    ,err=>{
      console.log(err)
    })
  }
}
