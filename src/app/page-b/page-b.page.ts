import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NavController } from '@ionic/angular';

@Component({
  selector: "app-page-b",
  templateUrl: "./page-b.page.html",
  styleUrls: ["./page-b.page.scss"]
})
export class PageBPage implements OnInit {
  constructor(private router: Router, private navCtrl:NavController) {}

  ngOnInit() {}

  back2a() {
    //this.router.navigateByUrl('page-a');
    this.router.navigate(['page-a'])
  }
}
