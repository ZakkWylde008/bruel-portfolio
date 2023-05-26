import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor(private angularstorage: AngularFireStorage) { }

  getVideoList() {
    const videolist:any[] = [];
    const storageRef = this.angularstorage.ref('');
    // return storageRef.listAll().pipe(map(result => {
    //     return result.items.map(item => item.name);
    //     })
    // );
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
}
