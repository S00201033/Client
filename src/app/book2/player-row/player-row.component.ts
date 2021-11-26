import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/player';

@Component({
  selector: 'app-book-row',
  templateUrl: './player-row.component.html',
  styleUrls: ['./player-row.component.css']
})
export class PlayerRowComponent implements OnInit {

  @Input() player?: Player;

  constructor() { }

  ngOnInit(): void {
  }

}