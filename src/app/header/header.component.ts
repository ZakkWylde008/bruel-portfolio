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

  accueil: boolean = false;
  apropos: boolean = false;
  experiences: boolean = false;
  projets: boolean = false;
  contacts: boolean = false;

  constructor(private sharedService: SharedService) {

  }

  ngOnInit(): void {
    this.accueil = true;
    this.sharedService.setIsAccueil(this.accueil);

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

  openApropos(){
    this.accueil = false;
    this.apropos = true;
    this.experiences = false;
    this.projets = false;
    this.contacts = false;
    this.sharedService.setIsAccueil(this.accueil);
    this.sharedService.setIsApropos(this.apropos);
    this.sharedService.setIsExperiences(this.experiences);
    this.sharedService.setIsProjets(this.projets);
    this.sharedService.setIsContacts(this.contacts);

    this.menuButton = true;
    this.menuVisibility = false;
    this.isMenuOpenHeader = false;
    this.sharedService.setIsMenuOpenHeader(this.isMenuOpenHeader);
  }

  openExperiences(){
    this.accueil = false;
    this.apropos = false;
    this.experiences = true;
    this.projets = false;
    this.contacts = false;
    this.sharedService.setIsAccueil(this.accueil);
    this.sharedService.setIsApropos(this.apropos);
    this.sharedService.setIsExperiences(this.experiences);
    this.sharedService.setIsProjets(this.projets);
    this.sharedService.setIsContacts(this.contacts);

    this.menuButton = true;
    this.menuVisibility = false;
    this.isMenuOpenHeader = false;
    this.sharedService.setIsMenuOpenHeader(this.isMenuOpenHeader);
  }

  openProjets(){
    this.accueil = false;
    this.apropos = false;
    this.experiences = false;
    this.projets = true;
    this.contacts = false;
    this.sharedService.setIsAccueil(this.accueil);
    this.sharedService.setIsApropos(this.apropos);
    this.sharedService.setIsExperiences(this.experiences);
    this.sharedService.setIsProjets(this.projets);
    this.sharedService.setIsContacts(this.contacts);

    this.menuButton = true;
    this.menuVisibility = false;
    this.isMenuOpenHeader = false;
    this.sharedService.setIsMenuOpenHeader(this.isMenuOpenHeader);
  }

  openContacts(){
    this.accueil = false;
    this.apropos = false;
    this.experiences = false;
    this.projets = false;
    this.contacts = true;
    this.sharedService.setIsAccueil(this.accueil);
    this.sharedService.setIsApropos(this.apropos);
    this.sharedService.setIsExperiences(this.experiences);
    this.sharedService.setIsProjets(this.projets);
    this.sharedService.setIsContacts(this.contacts);

    this.menuButton = true;
    this.menuVisibility = false;
    this.isMenuOpenHeader = false;
    this.sharedService.setIsMenuOpenHeader(this.isMenuOpenHeader);
  }

}
