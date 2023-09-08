import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { 
  Storage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from '@angular/fire/storage';
// import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateProjetComponent implements OnInit {

  public video: any = {};
  // public videoDescription: string;

  constructor(
    public storage: Storage,
    // private db: AngularFireDatabase,
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


    // const filename = `${new Date().getTime()}_${this.video.name}`;

    // // Upload the video to Firebase Storage.
    // const videoRef = this.storage.ref(filename);
    // videoRef.put(this.video).then(() => {
    //   // Once the upload is complete, you can store the video metadata (including description) in Firebase Realtime Database or Firestore.
    //   const metadata = {
    //     description: this.videoDescription,
    //     downloadURL: videoRef.getDownloadURL(), // Get the download URL of the uploaded video.
    //   };

    //   // Save metadata to Firebase Realtime Database or Firestore.
    //   this.db.object(`/videos/${filename}`).set(metadata);

    //   // Clear the description and selected file after upload.
    //   this.videoDescription = '';
    //   this.video = null;
    // });
  }

}
