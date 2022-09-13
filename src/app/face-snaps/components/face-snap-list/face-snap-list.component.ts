import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { Observable} from "rxjs";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps$!: Observable<FaceSnap[]>;
  // private destroy$!: Subject<boolean>;
  constructor(private faceSnapsService: FaceSnapsService) { }
  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();
    // this.destroy$ = new Subject<boolean>(); // Observable qu'on crée pour émettre à demande
    // // On crée un observable qui se détruit à la destruction du compoenent
    // interval(1000).pipe(
    //   tap(console.log),
    //   takeUntil(this.destroy$)
    // ).subscribe();
}
  // ngOnDestroy(): void {
  //   this.destroy$.next(true);
  // }


}
