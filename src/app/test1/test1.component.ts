import { Component, OnInit } from '@angular/core';
import { PlayerService} from '../player.service'
import {Player} from '../player'
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  
  testString = 'hello'

  testArray = ['a','b','c']

  players: Player[] = [];

  message?: string;

  constructor(private playerService : PlayerService) { }


  ngOnInit(): void {
    this.playerService.getPlayers().subscribe({
      next: (value: Player[]) => this.players = value,
      complete: () => console.log('player service finished'),
      error: (message) => this.message =message

    }) 

  }


}
