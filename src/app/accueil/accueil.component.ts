import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { fadeInAnimation } from '../animations';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  animations: [fadeInAnimation]
})
export class AccueilComponent implements OnInit {

  accueil: boolean = false;
  apropos: boolean = false;
  experiences: boolean = false;
  projets: boolean = false;
  contacts: boolean = false;

  isMenuOpen: boolean = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.isMenuOpenHeader$.subscribe(isOpen => {
      this.isMenuOpen = isOpen;
    });
    

    this.sharedService.isAccueil$.subscribe(is => {
      this.accueil = is;
    });
    this.sharedService.isApropos$.subscribe(is => {
      this.apropos = is;
    });
    this.sharedService.isExperiences$.subscribe(is => {
      this.experiences = is;
    });
    this.sharedService.isProjets$.subscribe(is => {
      this.projets = is;
    });
    this.sharedService.isContacts$.subscribe(is => {
      this.contacts = is;
    });
  }

  openCV(){
    console.log("open CV");
  }
}
