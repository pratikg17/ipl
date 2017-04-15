import { Component } from '@angular/core';




export class Team {
  position: number;
  name: string;
}

const TEAMS: Team[] = [
  { position: 1, name: 'Mumbai Indian' },
  { position: 2, name: 'Pune Super Giants' },
  { position: 3, name: 'Royal Chanllengers Bangalore' },
  { position: 4, name: 'Chennai Super Kings' },
  { position: 5, name: 'Kolkata Knight Riders' },
  { position: 6, name: 'Delhi Daredevils' },
  { position: 7, name: 'Gujrat Lions' },
  { position: 8, name: 'Kings XI Punjab' },
  { position: 9, name: 'Rajastan Royals' },
  { position: 10, name: 'SunRisers Hyderabad' }
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Welcome to IPL 2018';
  teams= TEAMS; 
  selectedTeam: Team;

  onSelected(team: Team) {
    this.selectedTeam = team;
  }


}
