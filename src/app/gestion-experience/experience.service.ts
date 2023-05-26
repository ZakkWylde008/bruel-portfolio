import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Experiences } from './experiences.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private angularfirestore: AngularFirestore) { }

  getExperienceList(){
    return this.angularfirestore
    .collection('experience-collection')
    .snapshotChanges();
  }

  createExperience(experience: Experiences){
    return new Promise<any>((resolve, reject) => {
      this.angularfirestore
      .collection('experience-collection')
      .add(experience)
      .then(response => { console.log(response) }, error => reject(error));
    });
  }

  getExperienceDoc(id: any){
    return this.angularfirestore
    .collection('experience-collection')
    .doc(id)
    .valueChanges();
  }

  updateExperience(experience: Experiences, id: any){
    return this.angularfirestore
    .collection('experience-collection')
    .doc(id)
    .update({
      nom: experience.nom,
      type: experience.type,
      dateDebut: experience.dateDebut,
      dateFin: experience.dateFin,
      description: experience.description
    });
  }

  deleteExperience(experience: Experiences){
    return this.angularfirestore
    .collection('experience-collection')
    .doc(experience.id)
    .delete();
  }
}
