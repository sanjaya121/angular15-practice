import { Component, OnInit } from "@angular/core";
import { HomeService } from "src/app/services/home/home.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  /**
   *
   */
  constructor(private homeService: HomeService) {}
  ngOnInit(): void {
    console.log("object :>>, ng init of home components ");
    this.getProducts();
  }
  ngOnChanges() {
    console.log("ng changes of home component");
  }
  ngDoCheck() {
    console.log("ngDoCheck of home component");
  }
  ngAfterContentInit() {}
  ngAfterContentChecked() {}
  ngAfterViewInit() {}
  ngAfterViewChecked() {}
  ngOnDestroy() {}

  getProducts = () => {
    this.homeService.getPhotoes().subscribe((products) => {
      console.log("products :>> ", products);
    });
  };
}
