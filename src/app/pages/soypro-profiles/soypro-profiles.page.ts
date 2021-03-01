import { Component, OnInit } from '@angular/core';

// Services
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-soypro-profiles',
  templateUrl: './soypro-profiles.page.html',
  styleUrls: ['./soypro-profiles.page.scss'],
})
export class SoyproProfilesPage implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }
}
