import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

import { NoteListService } from '../../services/note-list.service';
import { Observable } from 'rxjs/Rx';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { Note } from '../../model/note.model';
//import 'rxjs/Rx'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  noteList: Observable<Note[]>
 
  constructor(public navCtrl: NavController, private noteListService: NoteListService) {
    this.noteList = this.noteListService.getNoteList()
      .snapshotChanges()
      .map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });
  }
}
