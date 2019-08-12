import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page-c',
  templateUrl: './page-c.page.html',
  styleUrls: ['./page-c.page.scss'],
})
export class PageCPage implements OnInit {

  constructor(private router: Router, private navCtrl:NavController) { }

  ngOnInit() {
  }
  back2a() {
    //this.router.navigateByUrl('page-a');
    this.router.navigate(['page-a'])
  }
}
