import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
import { NewFaceSnapComponent } from './components/new-face-snap/new-face-snap.component';
import {SingleFacesnapComponent} from "./components/single-facesnap/single-facesnap.component";
import {AuthGuard} from "../core/guards/auth.guard";

const routes: Routes = [
  // ordre des routes
  { path: 'create', component: NewFaceSnapComponent, canActivate:[AuthGuard] },
  { path: ':id', component: SingleFacesnapComponent, canActivate:[AuthGuard] },
  { path: '', component: FaceSnapListComponent , canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaceSnapsRoutingModule {}
