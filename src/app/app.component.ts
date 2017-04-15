import { Component } from '@angular/core';




export class Team {
  position: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Welcome to IPL 2017';
  
  team: Team = {
    position: 1,
    name:"Mumbai Indian"
  }


}
