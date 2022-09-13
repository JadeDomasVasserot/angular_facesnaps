import {Component, OnInit} from '@angular/core';
import {FaceSnap} from './core/models/face-snap.model';
import {filter, interval, map, Observable, take, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  interval$!: Observable<string>;
  ngOnInit() {

    this.interval$ = interval(1000).pipe(
        take(3), // on connait le nombre d'émission pour détruire observable après
      filter(value => value % 3 === 0), //filtre les émissions
      map(value => value % 2 === 0 ? // transforme les émissions
        `Je suis ${value} et je suis pair` :
        `Je suis ${value} et je suis impair`
      ),
      tap(text => this.logger(text)) // agit sur l'emission sans faire de changement
    );

    // générer des nombres croissants avec interval()

    // Autre manière de souscrire dans le TS :
    // setTimeout(() => {
    //   this.interval$.subscribe(value => console.log(value));
    // }, 3000);
  }
  logger(text: string): void {
    console.log(`Log: ${text}`);
  }
  //Opérateur de haut niveau
//   lightObservable$.pipe(
//     mergeMap(color => getTrainObservable$(color)) --> Mets en parallèle les émission peut importe si finit avant
  //  concatMap --> Attends avant de souscrire à la prochaine émission, met série ( l'odre des opération important)
  // exhaustMap --> assure le traitement complet avant de souscire (quand évent doit etre entierement traité)
  // switchMap --> traite la derniere et annule toutes les autres
// ).subscribe();
}
