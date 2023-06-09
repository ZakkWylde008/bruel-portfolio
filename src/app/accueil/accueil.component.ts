import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { fadeInAnimation, slideTopFadeInAnimation, slideBottomFadeInAnimation, slideLeftFadeInAnimation, slideRightFadeInAnimation } from '../animations';
import { Experiences } from '../gestion-experience/experiences.model';
import { ExperienceService } from '../gestion-experience/experience.service';
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

  isMenuOpen: boolean = false;

  experience: Experiences[] = [];

  projet:any = [];

  constructor(
    private sharedService: SharedService,
    private projectservice: ProjetService,
    private experienceService: ExperienceService
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

    this.experienceService.getExperienceList().subscribe(res => {
      this.experience = res.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {},
        } as Experiences;
      });
      this.experience[0].isShow = true;
    });

    this.projet = this.projectservice.getVideoList();
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
