import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialougeComponent } from '../dialouge/dialouge.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  data: any = [
    {
      subtitle: 'Scratch Programming',
      title: 'Scratch Programming for beginner',
      content: "Scratch is a virtual programming language developed using blocks for creating games, animations and interactive stories.",
      imgsource: '../../../assets/images/custom/scratch2.png',
      id: 1
    },
    {
      subtitle: 'Arduino',
      title: 'Arduino for Tech minds',
      content: "Arduino is an open source platform used for building simple and complex projects.",
      imgsource: '../../../assets/images/custom/Arduino1.png',
      id: 2
    },
    {
      subtitle: 'MIT',
      title: 'Wanna Make Something Interesting',
      content: "MIT app inventor is block based programming developed by MIT for developing own mobile application.",
      imgsource: '../../../assets/images/custom/MIT.png',
      id: 3
    }
  ]
  constructor(public dialog: MatDialog) { }

  openDialog(item): void {
    console.log('dial');

    const dialogRef = this.dialog.open(DialougeComponent, {
      data: item,
      width: '400px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  ngOnInit() {
  }

}
