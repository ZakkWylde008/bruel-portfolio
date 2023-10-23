import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { 
  Storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject
} from '@angular/fire/storage';
import { ProjetService } from './projet.service';
import { Projet } from './projet.model';


@Component({
  selector: 'app-gestion-projet',
  templateUrl: './gestion-projet.component.html',
  styleUrls: ['./gestion-projet.component.css']
})
export class GestionProjetComponent implements OnInit {

  videolist: any = [];
  projetlist: Projet[] = [];

  constructor(
    private projetservice: ProjetService,
    public storage: Storage,
    public router: Router
  ) { }

  ngOnInit(): void {
    // this.videolist = this.projetservice.getVideoList();
    this.projetservice.getProjetList().subscribe(res => {
      this.projetlist = res.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as Projet;
      });
    });
  }

  removeVideo(projet: any){
    const projRef = ref(this.storage, projet.nom);
    deleteObject(projRef).then(() => {
      this.projetservice.deleteProjet(projet);
      console.log("Projet supprimer avec succès!");
      setTimeout(() => {
        this.router.navigate(['backend008/projet']);
      }, 1000);
    }).catch((error) => {
      console.log("Erreur: " +error);
    });
  }

}
