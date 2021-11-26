import { Component, Input, OnInit } from '@angular/core';
import {Player} from '../../player';

@Component({
  selector: 'app-book-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {

  @Input() player? : Player;

  constructor() { }

  ngOnInit(): void {
  }

}