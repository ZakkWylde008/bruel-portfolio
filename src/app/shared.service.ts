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

  private isMenuOpenFooter = new BehaviorSubject<boolean>(false);
  isMenuOpenFooter$ = this.isMenuOpenFooter.asObservable();
  setIsMenuOpenFooter(value: boolean) {
    this.isMenuOpenFooter.next(value);
  }

  private isHeaderBorder = new BehaviorSubject<boolean>(false);
  isHeaderBorder$ = this.isHeaderBorder.asObservable();
  setIsHeaderBorder(value: boolean) {
    this.isHeaderBorder.next(value);
  }
}
