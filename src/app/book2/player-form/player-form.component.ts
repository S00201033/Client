import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Player } from 'src/app/player';

@Component({
  selector: 'app-book-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormCompenent implements OnInit {

  @Input() player?: Player;
  @Output() playerFormClose = new EventEmitter<Player>();
  message: string = "";
  playerForm? : FormGroup  ;


  

  constructor() { }

  ngOnInit(): void {

    this.playerForm = new FormGroup({
      playerName: new FormControl(this.player?.playerName, [Validators.required, Validators.minLength(3)]),
      shirtNumber: new FormControl(this.player?.shirtNumber, [Validators.required, Validators.max(2024)]),
      teamName: new FormControl(this.player?.teamName),
      price: new FormControl(this.player?.price),
      nationality: new FormControl(this.player?.nationality)
    })
  }

  onSubmit() {
    console.log('forms submitted with ');
    console.table(this.playerForm?.value);
    this.playerFormClose.emit(this.playerForm?.value)
  }

  get playerName() {
    return this.playerForm?.get('playerName');
  }
  get shirtNumber() {
    return this.playerForm?.get('shirtNumber');
  }
  get teamName() {
    return this.playerForm?.get('teamName');
  }
  get price() {
    return this.playerForm?.get('price');
  }
  get nationality() {
    return this.playerForm?.get('nationality');
  }

  closeForm() {
    this.playerFormClose.emit(undefined)

  }


}
