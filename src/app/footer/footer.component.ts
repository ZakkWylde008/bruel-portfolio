import { Component, OnInit, HostListener, EventEmitter, Output } from '@angular/core';
import { SharedService } from '../shared.service';
import { menuFadeInAnimation } from '../animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations:[menuFadeInAnimation]
})
export class FooterComponent implements OnInit {

  public getScreenWidth: any;
  public getScreenHeight: any;

  menuVisibility: boolean = false;

  isMenuOpenHeader: boolean = false;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.onWindowResize();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;

    if(this.getScreenWidth < 769){
      this.menuVisibility = false;
      this.sharedService.setIsMenuOpenFooter(this.menuVisibility);
    }else{
      this.menuVisibility = true;
      this.sharedService.setIsMenuOpenFooter(this.menuVisibility);
    }
  }

}
