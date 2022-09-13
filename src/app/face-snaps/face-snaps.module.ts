import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FaceSnapComponent} from "./components/face-snap/face-snap.component";
import {FaceSnapListComponent} from "./components/face-snap-list/face-snap-list.component";
import {SingleFacesnapComponent} from "./components/single-facesnap/single-facesnap.component";
import {NewFaceSnapComponent} from "./components/new-face-snap/new-face-snap.component";
import {ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import {FaceSnapsRoutingModule} from "./face-snaps-routing.module";

// Feature Module

@NgModule({
  declarations: [
    FaceSnapComponent,
    FaceSnapListComponent,
    SingleFacesnapComponent,
    NewFaceSnapComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FaceSnapsRoutingModule,
  ],
  exports: [
    FaceSnapComponent,
    FaceSnapListComponent,
    SingleFacesnapComponent,
    NewFaceSnapComponent,
  ]
})
export class FaceSnapsModule { }
