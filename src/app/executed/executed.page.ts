import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
@Component({
  selector: 'app-executed',
  templateUrl: './executed.page.html',
  styleUrls: ['./executed.page.scss'],
})
export class ExecutedPage implements OnInit {

  currentDate : string;
  newTask : string = '';
  allTask = [];
  userEmail: string;

  constructor(private angFire : AngularFireDatabase, private navCtrl: NavController,
    private authService: AuthenticateService) {
    let myDate = new Date();
    let options = {weekday : 'long', month :'long', day : 'numeric' }
    this.currentDate = myDate.toLocaleDateString('en-en', options)
  }

  ngOnInit() {
    this.authService.userDetails().subscribe(res => {
      console.log('res', res);
      if (res !== null) {
        this.userEmail = res.email;
      } else {
        this.navCtrl.navigateBack('');
      }
    }, err => {
      console.log('err', err);
    })
    this.getTasks();
  }

  addNewTask() {
    this.angFire.list('Tasks/').push({
      text : this.newTask,
      date : new Date().toISOString(),
      checked : false
    });
    this.newTask = '';

  }

  getTasks() {
    this.angFire.list('Tasks/').snapshotChanges(['child_added']).subscribe(
      (reponse) => {
        console.log(reponse);
        this.allTask = [];
        reponse.forEach( element => {
          //console.log('****', element)
          this.allTask.push({
            key : element.key,
            text : element.payload.exportVal().text,
            date : element.payload.exportVal().date.substring(11, 16),
            checked : element.payload.exportVal().checked
          })

        })
      }
    )
  }

  changeCheckedState(tsk) {
    this.angFire.object(`Tasks/${tsk.key}/checked/`).set(tsk.checked);
  }

  deleteTask(id) {
    this.angFire.list('Tasks/').remove(id);
    this.getTasks();
  }
  logout() {
    this.authService.logoutUser()
      .then(res => {
        console.log(res);
        this.navCtrl.navigateForward('/login');

      })
      .catch(error => {
        console.log(error);
      })
  }

}
