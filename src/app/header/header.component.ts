import { Component, OnInit, HostListener } from '@angular/core';
import { SharedService } from '../shared.service';
import { fadeInAnimation } from '../animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [fadeInAnimation]
})
export class HeaderComponent implements OnInit {

  public getScreenWidth: any;
  public getScreenHeight: any;

  sm: boolean = false;
  menuVisibility: boolean = false;
  menuButton: boolean = true;

  isMenuOpenHeader: boolean = false;

  headerBorder: boolean = false;

  constructor(private sharedService: SharedService) {

  }

  ngOnInit(): void {
    this.sharedService.isHeaderBorder$.subscribe(isHeaderBorder => {
      this.headerBorder = isHeaderBorder;
    });

    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    this.onWindowResize();
  }

  openMenu(){
    this.menuVisibility = true;
    this.menuButton = false;
    this.isMenuOpenHeader = true;

    this.sharedService.setIsMenuOpenHeader(this.isMenuOpenHeader);
  }

  closeMenu(){
    this.menuVisibility = false;
    this.menuButton = true;
    this.isMenuOpenHeader = false;

    this.sharedService.setIsMenuOpenHeader(this.isMenuOpenHeader);
    
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
      this.isMenuOpenHeader = false;
      this.sharedService.setIsMenuOpenHeader(this.isMenuOpenHeader);
    }
  }

  openAccueil(event: any){

    this.menuButton = true;
    this.menuVisibility = false;
    this.isMenuOpenHeader = false;
    this.sharedService.setIsMenuOpenHeader(this.isMenuOpenHeader);
  }

  openApropos(event: any){

    this.menuButton = true;
    this.menuVisibility = false;
    this.isMenuOpenHeader = false;
    this.sharedService.setIsMenuOpenHeader(this.isMenuOpenHeader);
  }

  openExperiences(event: any){

    this.menuButton = true;
    this.menuVisibility = false;
    this.isMenuOpenHeader = false;
    this.sharedService.setIsMenuOpenHeader(this.isMenuOpenHeader);
  }

  openProjets(event: any){

    this.menuButton = true;
    this.menuVisibility = false;
    this.isMenuOpenHeader = false;
    this.sharedService.setIsMenuOpenHeader(this.isMenuOpenHeader);
  }

}
