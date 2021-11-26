import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Player } from 'src/app/player';


@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css']
})
export class SampleFormComponent implements OnInit {

  @Output() newPlayerEvent = new EventEmitter<Player>();
  message: string = "";


  playerForm: FormGroup = new FormGroup({
    playerName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    shirtNumber: new FormControl('', [Validators.required, Validators.max(2024)]),
    teamName: new FormControl(''),
      price: new FormControl(''),
      nationality: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('forms submitted with ');
    console.table(this.playerForm.value);
    this.newPlayerEvent.emit(this.playerForm.value)
  }

  get playerName() {
    return this.playerForm.get('playerName');
  }
  get shirtNumber() {
    return this.playerForm.get('shirtNumber');
  }
  get teamName() {
    return this.playerForm.get('teamName');
  }
  get price() {
    return this.playerForm.get('price');
  }
  get nationality() {
    return this.playerForm.get('nationality');
  }



}
