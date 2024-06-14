import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import {
  NgStyle,
  NgClass,
  UpperCasePipe,
  LowerCasePipe,
  TitleCasePipe,
  DatePipe,
} from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.services';
import { ActivatedRoute,RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    RouterLink
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss',
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  userHasSnapped!: boolean;
  snapButton!: string;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userHasSnapped = false;
    this.snapButton = 'Oh Snap';

    this.getFaceSnap();
  }

  onSnap(): void {
    if (!this.userHasSnapped) {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.snapButton = 'Oops, unSnap!';
      this.userHasSnapped = true;
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.snapButton = 'Oh Snap!';
      this.userHasSnapped = false;
    }
  }
  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }
}
