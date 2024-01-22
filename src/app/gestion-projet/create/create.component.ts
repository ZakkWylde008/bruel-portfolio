import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { 
  Storage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from '@angular/fire/storage';
import { ProjetService } from '../projet.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateProjetComponent implements OnInit {

  public video: any = {};
  public image: any = {};
  public outils: string;

  constructor(
    public storage: Storage,
    public router: Router,
    private projetService : ProjetService
  ) { }

  ngOnInit(): void {
  }

  chooseVideo(event: any){
    this.video = event?.target.files[0];
  }

  chooseImage(event: any){
    this.image = event?.target.files[0];
  }

  onSubmit(){
    const storageref = ref(this.storage, this.video.name);
    const uploadtask = uploadBytesResumable(storageref, this.video);
    uploadtask.on('state_changed', (snapshot) => {
      const progression = ((snapshot.bytesTransferred / snapshot.totalBytes)*100);
      console.log("L'ajout de la video est à " +progression +" %");
    },
    (error) => {
      console.log(error.message);
    },
    () => {
      getDownloadURL(uploadtask.snapshot.ref).then((downloadURL) => {
        const storagerefImg = ref(this.storage, this.image.name);
        const uploadtaskImg = uploadBytesResumable(storagerefImg, this.image);
        uploadtaskImg.on('state_changed', (snapshot) => {
          const progression = ((snapshot.bytesTransferred / snapshot.totalBytes)*100);
          console.log("L'ajout de l'image est à " +progression +" %");
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          getDownloadURL(uploadtaskImg.snapshot.ref).then((urlImg) => {
            let dataToSend = {
              nom: this.video.name,
              urlVideo: downloadURL,
              urlImage: urlImg,
              outils: this.outils,
              date: new Date(),
            }
            this.projetService.createProjet(dataToSend);
              alert("Ajout d'un projet efféctué avec succès!");
          });
        }
        );
        
      });
    }
    );
  }

}
