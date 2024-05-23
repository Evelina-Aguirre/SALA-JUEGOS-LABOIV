import { Injectable } from '@angular/core';
//import { AuthService } from '../../services/auth.service';
import { AngularFirestore,AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private mensajesCollection: AngularFirestoreCollection<any>;

  constructor(private firestore: AngularFirestore) {
    this.mensajesCollection = this.firestore.collection('chat');
  }

  getMessages(): Observable<any[]> {
    return this.mensajesCollection.valueChanges();
  }

  addMessage(user: string, text: string): void {
    this.mensajesCollection.add({ user, text });
  }
}
