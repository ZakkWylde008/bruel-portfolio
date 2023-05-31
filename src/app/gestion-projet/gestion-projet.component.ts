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


@Component({
  selector: 'app-gestion-projet',
  templateUrl: './gestion-projet.component.html',
  styleUrls: ['./gestion-projet.component.css']
})
export class GestionProjetComponent implements OnInit {

  videolist: any = [];

  constructor(
    private projetservice: ProjetService,
    public storage: Storage,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.videolist = this.projetservice.getVideoList();
  }

  removeVideo(video: any){
    const projRef = ref(this.storage, video.nom);
    deleteObject(projRef).then(() => {
      console.log("Projet supprimer avec succès!");
      setTimeout(() => {
        this.router.navigate(['backend008/projet']);
      }, 1000);
    }).catch((error) => {
      console.log("Erreur: " +error);
    });
  }

}
