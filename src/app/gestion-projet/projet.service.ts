import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Projet } from './projet.model';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor(private angularstorage: AngularFireStorage,
              private angularfirestore: AngularFirestore
              ) { }

  getVideoList() {
    const videolist:any[] = [];
    const storageRef = this.angularstorage.ref('');
    storageRef.listAll().subscribe((data) => {
      for (let i = 0; i < data.items.length; i++) {
        let name = data.items[i].name;
        let newref = this.angularstorage.ref(data.items[i].name);
        let url = newref.getDownloadURL().subscribe((data) => {
          videolist.push({
            nom: name,
            lien: data
          });
        });
      }
    });
    return videolist;
  }

  getProjetList(){
    return this.angularfirestore
    .collection('projet-collection')
    .snapshotChanges();
  }

  createProjet(projet: Projet){
    return new Promise<any>((resolve, reject) => {
      this.angularfirestore
      .collection('projet-collection')
      .add(projet)
      .then(response => { console.log(response) }, error => reject(error));
    });
  }

  deleteProjet(projet: Projet){
    return this.angularfirestore
    .collection('projet-collection')
    .doc(projet.id)
    .delete();
  }
}
