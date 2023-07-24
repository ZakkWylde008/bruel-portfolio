import { Component, OnInit, HostListener, EventEmitter, Output } from '@angular/core';
import { SharedService } from '../shared.service';
import { fadeInAnimation, menuFadeInAnimation } from '../animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [fadeInAnimation, menuFadeInAnimation]
})
export class HeaderComponent implements OnInit {
  @Output() menuAccueilClick = new EventEmitter<void>();
  @Output() menuAproposClick = new EventEmitter<void>();
  @Output() menuExperienceClick = new EventEmitter<void>();
  @Output() menuProjetClick = new EventEmitter<void>();

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

    if(this.getScreenWidth <= 769){
      this.sm = true;
      this.sharedService.setIsSM(this.sm);
      this.menuButton = true;
    }else{
      this.sm = false;
      this.sharedService.setIsSM(this.sm);
      this.menuVisibility = false;
      this.menuButton = false;
      this.isMenuOpenHeader = false;
      this.sharedService.setIsMenuOpenHeader(this.isMenuOpenHeader);
    }
  }

  openAccueil(){
    this.menuAccueilClick.emit();

    this.menuButton = true;
    this.menuVisibility = false;
    this.isMenuOpenHeader = false;
    this.sharedService.setIsMenuOpenHeader(this.isMenuOpenHeader);
  }

  openApropos(){
    this.menuAproposClick.emit();

    this.menuButton = true;
    this.menuVisibility = false;
    this.isMenuOpenHeader = false;
    this.sharedService.setIsMenuOpenHeader(this.isMenuOpenHeader);
  }

  openExperiences(){
    this.menuExperienceClick.emit();

    this.menuButton = true;
    this.menuVisibility = false;
    this.isMenuOpenHeader = false;
    this.sharedService.setIsMenuOpenHeader(this.isMenuOpenHeader);
  }

  openProjets(){
    this.menuProjetClick.emit();

    this.menuButton = true;
    this.menuVisibility = false;
    this.isMenuOpenHeader = false;
    this.sharedService.setIsMenuOpenHeader(this.isMenuOpenHeader);
  }

}
