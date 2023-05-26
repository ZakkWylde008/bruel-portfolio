import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExperienceService } from '../experience.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  experienceEditForm: FormGroup;
  experienceRef: any;

  constructor(
    public experienceService: ExperienceService,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private router: Router
  ) { 
    this.experienceEditForm = this.formBuilder.group({
      nom: [''],
      type: [''],
      dateDebut: [''],
      dateFin: [''],
      description: ['']
    });
   }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');
    this.experienceService.getExperienceDoc(id).subscribe(res => {
      this.experienceRef = res;
      this.experienceEditForm = this.formBuilder.group({
        nom: [this.experienceRef.nom],
        type: [this.experienceRef.type],
        dateDebut: [this.experienceRef.dateDebut],
        dateFin: [this.experienceRef.dateFin],
        description: [this.experienceRef.description]
      });
    });

  }

  onSubmit(){
    const id = this.act.snapshot.paramMap.get('id');
    this.experienceService.updateExperience(this.experienceEditForm.value, id);
    alert("Modification d'un expérience efféctué avec succès!");
    setTimeout(() => {
      this.router.navigate(['backend008/experience']);
    }, 1000);
  }

}
