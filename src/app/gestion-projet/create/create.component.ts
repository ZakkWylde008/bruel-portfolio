import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { 
  Storage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from '@angular/fire/storage';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateProjetComponent implements OnInit {

  public video: any = {};

  constructor(
    public storage: Storage,
    public router: Router
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
    // () => {
    //   getDownloadURL(uploadtask.snapshot.ref).then((downloadURL) => {
    //     console.log("Video disponible sur le lien: " +downloadURL);
    //   });
    // }
    );
  }

}
