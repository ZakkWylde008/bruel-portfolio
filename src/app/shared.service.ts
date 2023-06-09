import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private isMenuOpenHeader = new BehaviorSubject<boolean>(false);
  isMenuOpenHeader$ = this.isMenuOpenHeader.asObservable();
  setIsMenuOpenHeader(value: boolean) {
    this.isMenuOpenHeader.next(value);
  }

  private isAccueil = new BehaviorSubject<boolean>(false);
  isAccueil$ = this.isAccueil.asObservable();
  setIsAccueil(value: boolean) {
    this.isAccueil.next(value);
  }

  private isApropos = new BehaviorSubject<boolean>(false);
  isApropos$ = this.isApropos.asObservable();
  setIsApropos(value: boolean) {
    this.isApropos.next(value);
  }

  private isExperiences = new BehaviorSubject<boolean>(false);
  isExperiences$ = this.isExperiences.asObservable();
  setIsExperiences(value: boolean) {
    this.isExperiences.next(value);
  }
  
  private isProjets = new BehaviorSubject<boolean>(false);
  isProjets$ = this.isProjets.asObservable();
  setIsProjets(value: boolean) {
    this.isProjets.next(value);
  }
}
