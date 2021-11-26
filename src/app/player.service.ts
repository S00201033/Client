
   
import { Injectable } from '@angular/core';
import { Player } from './player'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private dataUri = 'http://localhost:3000/players'

  constructor(private http: HttpClient) { }

  addPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(this.dataUri, player)
      .pipe(
        catchError(this.handleError)
      )
  }

  updatePlayer(id: string, player: Player): Observable<Player> {
    console.log('subscribing to update' + id);
    let playerURI: string = this.dataUri + '/' + id;
    return this.http.put<Player>(playerURI, player)
      .pipe(
        catchError(this.handleError)
      )
  }

  getPlayers(): Observable<Player[]> {

    console.log("get players called");

    return this.http.get<Player[]>(`${this.dataUri}`)
      .pipe(
        catchError(this.handleError)
      )
  }


/** DELETE: delete the book from the server */
deletePlayers(id: string): Observable<unknown> {
  const url = `${this.dataUri}/${id}`; // DELETE 
  return this.http.delete(url)
    .pipe(
      catchError(this.handleError)
    );
}


  //taken from: https://angular.io/guide/http

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.


      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error.error)}`);



      // question over how much information you want to give to the end-user
      // it depends on who will be using the system
      // this information would not be returned in a public interface but might in an intranet.

      if (error.status == 412) {
        return throwError('412 Error' + JSON.stringify(error.error))
      }

    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
