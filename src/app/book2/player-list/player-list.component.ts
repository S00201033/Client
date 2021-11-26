import { Component, OnInit } from '@angular/core';
import { Player } from '../../player'
import { PlayerService } from '../../player.service'


@Component({
  selector: 'app-book-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  playerList: Player[] = [];
  message: string = "";
  showPlayerForm: boolean = false;

  currentPlayer?: Player = undefined;

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {


    this.playerService.getPlayers().subscribe({
      next: (value: Player[]) => this.playerList = value,
      complete: () => console.log('player service finished'),
      error: (mess) => this.message = mess
    })
  }

  clicked(player: Player): void {
    this.currentPlayer = player;
    console.table(this.currentPlayer)
  }

  isSelected(player: Player): boolean {
    if (!player || !this.currentPlayer) {
      return false;
    }
    else {

      return player._id === this.currentPlayer._id;
    }
  }

  openAddPlayer(): void {
    this.currentPlayer = undefined;
    this.showPlayerForm = true;
  }

  openEditPlayer(): void {
    this.showPlayerForm = true;
  }

  addNewPlayer(newPlayer: Player): void {
    console.log('adding new player ' + JSON.stringify(newPlayer));
    this.playerService.addPlayer({ ...newPlayer })
      .subscribe({
        next: player => {
          console.log(JSON.stringify(player) + ' has been added');
          this.message = "new player has been added";
        },
        error: (err) => this.message = err
      });

    // so the updated list appears

    this.playerService.getPlayers().subscribe({
      next: (value: Player[]) => this.playerList = value,
      complete: () => console.log('player service finished'),
      error: (mess) => this.message = mess
    })
  }

  updatePlayer(id: string, player: Player): void {
    console.log('updating ' + JSON.stringify(player));
    this.playerService.updatePlayer(id, player)
      .subscribe({
        next: player => {
          console.log(JSON.stringify(player) + ' has been updated');
          this.message = " player has been updated";
        },
        error: (err) => this.message = err
      });
    // so the updated list appears

    this.playerService.getPlayers().subscribe({
      next: (value: Player[]) => this.playerList = value,
      complete: () => console.log('player service finished'),
      error: (mess) => this.message = mess
    })
  }


  /* either the form has closed without saving or new player details have been
  entered or a player has been updated */

  playerFormClose(player?: Player): void {
    this.showPlayerForm = false;
    console.table(player);
    if (player == null) {
      this.message = "form closed without saving";
      this.currentPlayer = undefined
    }
    else if (this.currentPlayer == null) {
      this.addNewPlayer(player);
    }
    else {
      this.updatePlayer(this.currentPlayer._id, player)
    }
  }

// note: Bad UX there is no check that the user wants to delete the player and hasn't just 
// hit the button by mistake

  deletePlayer() {
    console.log('deleting a player ');
    if (this.currentPlayer) {
      this.playerService.deletePlayers(this.currentPlayer._id)
        .subscribe({
          next: player => {
            console.log(JSON.stringify(player) + ' has been added');
            this.message = "player has been deleted";
          },
          error: (err) => this.message = err
        });
    }

    // so the updated list appears

    this.playerService.getPlayers().subscribe({
      next: (value: Player[]) => this.playerList = value,
      complete: () => console.log('player service finished'),
      error: (mess) => this.message = mess
    })

  }


  dismissAlert() {
    this.message = "";
  }

}