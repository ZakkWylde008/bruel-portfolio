import { Component, OnInit, HostListener } from '@angular/core';
import { SharedService } from '../shared.service';
import { fadeInAnimation, menuFadeInAnimation, videoFadeInAnimation } from '../animations';
import { Experiences } from '../gestion-experience/experiences.model';
import { ExperienceService } from '../gestion-experience/experience.service';
import { ProjetService } from '../gestion-projet/projet.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  animations: [fadeInAnimation, menuFadeInAnimation, videoFadeInAnimation]
})
export class AccueilComponent implements OnInit {

  isLoad: boolean = false;

  isMenuOpen: boolean = false;

  header_variable: boolean = true;

  experience: Experiences[] = [];
  projet:any = [];

  bodyNow: any = 0;
  docbodyNow:any = 0;
  headerBorder: boolean = false;

  isShowVideoModal: boolean = false;
  videoUrl: string = "";

  menuVisibilityFooter: boolean = false;

  isTextXS: boolean = false;

  constructor(
    private sharedService: SharedService,
    private projectservice: ProjetService,
    private experienceService: ExperienceService,
    ) {}

  ngOnInit(): void {
    this.isLoad = true;

    setTimeout(() => {
      this.isLoad = false;
    }, 2500);

    this.sharedService.isMenuOpenHeader$.subscribe(isOpen => {
      this.isMenuOpen = isOpen;
    });

    this.sharedService.isMenuOpenFooter$.subscribe(isOpen => {
      this.menuVisibilityFooter = isOpen;
    });

    this.experienceService.getExperienceList().subscribe(res => {
      this.experience = res.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {},
          isShow: false
        } as Experiences;
      }).sort(function(a, b){
        return +new Date(b.dateDebut!) - +new Date(a.dateDebut!);
      });
      
      this.experience[0].isShow = true;
    });

    this.projet = this.projectservice.getVideoList();

    this.sharedService.isSM$.subscribe(isSM => {
      this.isTextXS = isSM;
    });
  }

  changeDescription(exp: Experiences){
    exp.isShow = true;
    for(let i =0; i < this.experience.length; i++){
      if(this.experience[i] != exp && this.experience[i].isShow === true){
        this.experience[i].isShow = false;
      }
    }
  }

  openDemonstration(projet: any){
    this.isShowVideoModal = true;
    this.videoUrl = projet.lien;
  }

  closeDemonstration(){
    this.isShowVideoModal = false;
    this.videoUrl = "";
  }

  openCV(){
    const cvUrl = '../../assets/pdf/CV_Bruel.pdf';
    window.open(cvUrl, '_blank');
  }

  contactMe(){
    window.open('mailto:razafimbelobruel@gmail.com', '_self');
  }

  @HostListener("document:scroll")
  scrollFunction(){
    if(document.body.scrollTop > this.bodyNow || document.documentElement.scrollTop > this.docbodyNow){
      this.header_variable = false;
      this.bodyNow = document.body.scrollTop;
      this.docbodyNow = document.documentElement.scrollTop;
    }
    if(this.bodyNow > document.body.scrollTop || this.docbodyNow > document.documentElement.scrollTop){
      this.header_variable = true;
      this.bodyNow = document.body.scrollTop;
      this.docbodyNow = document.documentElement.scrollTop;
    }
    if(this.bodyNow > 0 || this.docbodyNow > 0){
      this.headerBorder = true;
      this.sharedService.setIsHeaderBorder(this.headerBorder);
    }else{
      this.headerBorder = false;
      this.sharedService.setIsHeaderBorder(this.headerBorder);
    }
  }

  scrollToDiv1(){
    const targetDiv = document.getElementById('target1')!;
    targetDiv.scrollIntoView({ behavior: 'smooth' });
  }
  scrollToDiv2(){
    const targetDiv = document.getElementById('target2')!;
    targetDiv.scrollIntoView({ behavior: 'smooth' });
  }
  scrollToDiv3(){
    const targetDiv = document.getElementById('target3')!;
    targetDiv.scrollIntoView({ behavior: 'smooth' });
  }
  scrollToDiv4(){
    const targetDiv = document.getElementById('target4')!;
    targetDiv.scrollIntoView({ behavior: 'smooth' });
  }
}
