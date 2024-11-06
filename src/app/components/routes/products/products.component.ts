import { Component } from "@angular/core";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent {
  ngOnInit(): void {
    console.log("object :>>, ng init of Products components ");
  }
  ngOnChanges() {
    console.log("ng changes of Products component");
  }
  ngDoCheck() {
    console.log("ngDoCheck of Products component");
  }
  ngAfterContentInit() {}
  ngAfterContentChecked() {}
  ngAfterViewInit() {}
  ngAfterViewChecked() {}
  ngOnDestroy() {}
}
