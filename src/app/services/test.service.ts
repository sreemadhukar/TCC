import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database'
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { Component } from '@angular/core';

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  favoriteColor?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TestService {
  collection: AngularFirestoreCollection<any>;
  user: Observable<User>;
username = 'madhukar';
tcc: any;
  constructor(private http: HttpClient,private db: AngularFireDatabase,private dbAuth: AngularFireAuth,private afs: AngularFirestore) { 

  }

  test() {
     
      this.db.list('/tcc')
    .valueChanges()
    .subscribe( tcc => {
      this.tcc = tcc;   
      console.log(this.tcc);
    });
    
this.collection = this.afs.collection('tcc');
this.tcc = this.afs.doc<User>('users').valueChanges()
console.log(this.collection);
  }
}
