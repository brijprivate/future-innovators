import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA,MatDialog } from '@angular/material/dialog';
import { BlogComponent } from '../blog/blog.component';

@Component({
  selector: 'app-dialouge',
  templateUrl: './dialouge.component.html',
  styleUrls: ['./dialouge.component.css']
})
export class DialougeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BlogComponent>,
    @Inject(MAT_DIALOG_DATA) public item: any) { }

  ngOnInit(): void {
    console.log(this.item)
  }
  close(){
    this.dialogRef.close()
  }
}
