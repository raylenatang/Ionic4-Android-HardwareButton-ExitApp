import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.page.html',
  styleUrls: ['./page-a.page.scss'],
})
export class PageAPage implements OnInit {

  constructor(private router: Router, private navCtrl:NavController) { }

  ngOnInit() {
  }
  back2home() {
    //this.router.navigateByUrl('home');
    this.router.navigate(['home'])
  }
  tob() {
    //this.router.navigateByUrl('page-b');
    this.router.navigate(['page-b'])
  }
  toc() {
    //this.router.navigateByUrl('page-c');
    this.router.navigate(['page-c'])
  }


}
