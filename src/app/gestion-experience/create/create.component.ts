import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ExperienceService } from '../experience.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public experienceForm: FormGroup;

  constructor(
    public experienceService: ExperienceService,
    public formBuilder: FormBuilder,
    public router: Router
  ) { 
    this.experienceForm = this.formBuilder.group({
      nom: [''],
      type: [''],
      dateDebut: [''],
      dateFin: [''],
      description: ['']
    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.experienceService.createExperience(this.experienceForm.value);
    alert("Ajout d'un expérience efféctué avec succès!");
    setTimeout(() => {
      this.router.navigate(['backend008/experience']);
    }, 1000);
  }

}
