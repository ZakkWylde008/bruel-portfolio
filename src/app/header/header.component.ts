import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public getScreenWidth: any;
  public getScreenHeight: any;

  sm: boolean = false;
  menuVisibility: boolean = false;
  menuButton: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    this.onWindowResize();
  }

  openMenu(){
    this.menuVisibility = true;
    this.menuButton = false;
  }

  closeMenu(){
    this.menuVisibility = false;
    this.menuButton = true;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;

    if(this.getScreenWidth < 769){
      this.sm = true;
      this.menuButton = true;
    }else{
      this.sm = false;
      this.menuVisibility = false;
      this.menuButton = false;
    }
  }

}
