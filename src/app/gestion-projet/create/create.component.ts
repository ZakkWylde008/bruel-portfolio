import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { 
  Storage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from '@angular/fire/storage';
// import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ProjetService } from '../projet.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateProjetComponent implements OnInit {

  public video: any = {};
  public outils: string;

  constructor(
    public storage: Storage,
    // private db: AngularFireDatabase,
    public router: Router,
    private projetService : ProjetService
  ) { }

  ngOnInit(): void {
  }

  chooseVideo(event: any){
    this.video = event?.target.files[0];
  }

  onSubmit(){
    const storageref = ref(this.storage, this.video.name);
    const uploadtask = uploadBytesResumable(storageref, this.video);
    uploadtask.on('state_changed', (snapshot) => {
      const progression = ((snapshot.bytesTransferred / snapshot.totalBytes)*100);
      console.log("L'ajout est à " +progression +" %");
    },
    (error) => {
      console.log(error.message);
    },
    () => {
      getDownloadURL(uploadtask.snapshot.ref).then((downloadURL) => {
        let dataToSend = {
          nom: this.video.name,
          url: downloadURL,
          outils: this.outils,
          date: new Date(),
        }
        this.projetService.createProjet(dataToSend);
          alert("Ajout d'un projet efféctué avec succès!");
          // setTimeout(() => {
          //   this.router.navigate(['backend008/projet']);
          // }, 1000);
        
      });
    }
    );
  }

}
