import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Google CV API
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  onesignalClient: any;
  constructor(public http: HttpClient) { 
  }

  getFaceDetection (image: any) {
    const visionRequest = {
      "requests": [{
        "image": {
          "content": image
        },
        "features": [{
          "type": "FACE_DETECTION",
          "maxResults": 10
        }]
      }]
    };
    
    return this.http.post ('https://vision.googleapis.com/v1/images:annotate?key=' + environment.googleCloudVisionAPIKey, visionRequest);
  }

  getFaceDetectionFromURL (imagen_uri: string) {
    const visionRequest = {
      "requests":[{
        "image": {
          "source": {
            "imageUri": imagen_uri
          }
        },
        "features":[{
          "type": "FACE_DETECTION",
          "maxResults": 10
        }]
      }]
    };

    return this.http.post ('https://vision.googleapis.com/v1/images:annotate?key=' + environment.googleCloudVisionAPIKey, visionRequest);
  }

  createNotification (message: any) {
    const url = 'https://onesignal.com/api/v1/notifications';

    let headers = new HttpHeaders ()
      .set ('Content-Type', 'application/json; charset=utf-8')
      .set ('Authorization', 'Basic ZmIzZDM0NDUtMWU2My00ZmQ3LWFmY2EtMmRkN2MxN2FmMDY5');

    return this.http.post (url, message, { headers: headers });
  }

  getDistancia (lat1: any, lon1: any, lat2: any, lon2: any,) {
  	let earthRadius = 6378.0;

    let dLat = this.toRad ((lat2 - lat1));
    let dLon = this.toRad ((lon2 - lon1));

   	let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
        
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	  let d = earthRadius * c;

	  return d;	
  }

  toRad (x: any) {
    return x * Math.PI / 180;
  }
}
  