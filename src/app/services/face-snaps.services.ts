import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    private faceSnaps : FaceSnap[] = [new FaceSnap(
        'Orange Monkey',
        'https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/pass/Monkey-Selfie.jpg',
        'Face Snap is a simple web application that allows you to take a picture of your face and save it to your computer.',
        new Date(), 
        10
      ),
      new FaceSnap(
        'grand canyon',
        'https://upload.wikimedia.org/wikipedia/commons/3/31/Canyon_River_Tree_%28165872763%29.jpeg',
        'look at the view',
        new Date(),
        210
      ).withLocation('Grand Canyon'),
      new FaceSnap(
        'my meal',
        'https://www.swinomishcasinoandlodge.com/wp-content/uploads/2020/02/Fatburger-resized-1200jpg.jpg',
        'miam',
        new Date(),
        3
      )
    ];

    getFaceSnaps() : FaceSnap[] {
        return [...this.faceSnaps];
    }
    snapFaceSnapById(id: string,snapType : SnapType): void {
        const faceSnap : FaceSnap = this.getFaceSnapById(id);
        faceSnap.snap(snapType);
    }

    getFaceSnapById(id: string): FaceSnap {
      const foundFaceSnap : FaceSnap | undefined = this.faceSnaps.find(faceSnap  => faceSnap.id === id);
        if(!foundFaceSnap){
            throw new Error('FaceSnap not found');
        }
      return foundFaceSnap;
    }
    viewFaceSnap(id: string): void {
        console.log('viewing face snap with id: ', id);
    }
}