import { Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { fadeInAnimation, menuFadeInAnimation, videoFadeInAnimation } from '../animations';
import { Experiences } from '../gestion-experience/experiences.model';
import { ExperienceService } from '../gestion-experience/experience.service';
import { Projet } from '../gestion-projet/projet.model';
import { ProjetService } from '../gestion-projet/projet.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  animations: [fadeInAnimation, menuFadeInAnimation, videoFadeInAnimation]
})
export class AccueilComponent implements OnInit, AfterViewInit {
  @ViewChild('expChart', { static: false }) expChart: ElementRef;

  isLoad: boolean = false;

  isMenuOpen: boolean = false;

  header_variable: boolean = true;

  experience: Experiences[] = [];
  projet:Projet[] = [];

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

    this.projectservice.getProjetList().subscribe(res => {
      this.projet = res.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as Projet;
      }).sort(function(a, b){
        return +new Date(b.date!) - +new Date(a.date!);
      });
    });

    this.sharedService.isSM$.subscribe(isSM => {
      this.isTextXS = isSM;
    });
  }

  ngAfterViewInit() {
    const ctx = this.expChart.nativeElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['ANGULAR', 'BOOTSTRAP', 'GIT', 'MYSQL', 'POSTGRES', 'SYMFONY', 'TAILWIND'],
        datasets: [{
          label: 'MES CONNAISSANCES (%)',
          data: [60, 50, 75, 80, 60, 50, 55]
        }]
      },
      options: {
        responsive: true,
        indexAxis: 'y',
        elements: {
          line: {
            borderWidth: 3
          }
        },
        plugins: {
          legend: {
            labels: {
              font:{
                size: 18
              }
            }
          }
        },
        scales: {
          x: {
            max: 100
          }
        }
      }
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
    this.videoUrl = projet.url;
  }

  closeDemonstration(){
    this.isShowVideoModal = false;
    this.videoUrl = "";
  }

  openCV(){
    const cvUrl = 'assets/pdf/CV_Bruel.pdf';
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
