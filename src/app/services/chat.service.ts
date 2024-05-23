import { Injectable } from '@angular/core';
//import { AuthService } from '../../services/auth.service';
import { AngularFirestore,AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
<<<<<<< HEAD
=======

>>>>>>> f8759934fda30ca55a14ebe76ff150a310912d2b

@Injectable({
  providedIn: 'root'
})

export class ChatService {

  private mensajesCollection: AngularFirestoreCollection<any>;

  constructor(private firestore: AngularFirestore) {
<<<<<<< HEAD
    this.mensajesCollection = this.firestore.collection('chats');
=======
    this.mensajesCollection = this.firestore.collection('chat');
>>>>>>> f8759934fda30ca55a14ebe76ff150a310912d2b
  }

  getMessages(): Observable<any[]> {
    return this.mensajesCollection.valueChanges();
  }

  addMessage(user: string, text: string): void {
<<<<<<< HEAD
    const timestamp = new Date().getTime();
    this.mensajesCollection.add({ user, text,timestamp });
=======
    this.mensajesCollection.add({ user, text });
>>>>>>> f8759934fda30ca55a14ebe76ff150a310912d2b
  }
}
