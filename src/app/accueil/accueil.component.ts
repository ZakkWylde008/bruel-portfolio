import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { fadeInAnimation, slideTopFadeInAnimation, slideBottomFadeInAnimation, slideLeftFadeInAnimation, slideRightFadeInAnimation } from '../animations';
import { Experiences } from './experiences.model';
import { ProjetService } from '../gestion-projet/projet.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  animations: [fadeInAnimation, slideTopFadeInAnimation, slideBottomFadeInAnimation, slideLeftFadeInAnimation, slideRightFadeInAnimation]
})
export class AccueilComponent implements OnInit {

  isLoad: boolean = false;

  accueil: boolean = false;
  apropos: boolean = false;
  experiences: boolean = false;
  projets: boolean = false;
  contacts: boolean = false;

  isMenuOpen: boolean = false;

  experience: Experiences[] = [];

  projet:any = [];

  constructor(
    private sharedService: SharedService,
    private projectservice: ProjetService
    ) {}

  ngOnInit(): void {
    this.isLoad = true;

    setTimeout(() => {
      this.isLoad = false;
    }, 2500);

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

    this.experience.push(this.getExp(new Experiences));
    this.experience.push(this.getExp2(new Experiences));

    this.projet = this.projectservice.getVideoList();
  }

  getExp(exp: Experiences){
    exp.id = 1;
    exp.nom = "CREA-TIC";
    exp.type = "Stage";
    exp.description = "Developpeur web";
    exp.dateDebut = new Date("07/06/2012");
    exp.dateFin = new Date("07/06/2015");
    exp.isShow = true;

    return exp;
  }

  getExp2(exp: Experiences){
    exp.id = 2;
    exp.nom = "INOVATIC";
    exp.type = "CDI";
    exp.description = "Developpeur mobile";
    exp.dateDebut = new Date("07/10/2010");
    exp.dateFin = new Date("07/06/2012");
    exp.isShow = false;

    return exp;
  }

  changeDescription(exp: Experiences){
    exp.isShow = true;
    for(let i =0; i < this.experience.length; i++){
      if(this.experience[i] != exp && this.experience[i].isShow === true){
        this.experience[i].isShow = false;
      }
    }
  }

  openDemonstration(projet: any[]){
    console.log(projet);
  }

  openCV(){
    console.log("open CV");
  }
}
