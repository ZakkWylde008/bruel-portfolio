import { Component, OnInit } from '@angular/core';
import { Experiences } from './experiences.model';
import { ExperienceService } from './experience.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-experience',
  templateUrl: './gestion-experience.component.html',
  styleUrls: ['./gestion-experience.component.css']
})
export class GestionExperienceComponent implements OnInit {

  experience: Experiences[];

  constructor(
    private experienceService: ExperienceService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.experienceService.getExperienceList().subscribe(res => {
      this.experience = res.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as Experiences;
      });
    });
  }

  removeExperience(experience: Experiences){
    if(confirm("Etes-vous sur de vouloir supprimer l'expérience n°" +experience.id +" ?"))
    this.experienceService.deleteExperience(experience);
    alert("Suppression d'un expérience efféctué avec succès!");
    setTimeout(() => {
      this.router.navigate(['backend008/experience']);
    }, 1000);
  }

}
