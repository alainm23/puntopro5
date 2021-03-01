import { Component, OnInit } from '@angular/core';

// Ionic
import { LoadingController, AlertController, NavController, ToastController } from '@ionic/angular';

// Services
import { DatabaseService } from '../../services/database.service';
import { AuthService } from '../../services/auth.service';

// Forms
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  form: FormGroup;
  constructor(private loadingController: LoadingController,
              private alertController: AlertController,
              private toastController: ToastController,
              private database: DatabaseService,
              private auth: AuthService,
              private navCtrl: NavController) { }

  ngOnInit() {
    const email = new FormControl ('', [Validators.required, Validators.email]);
    const confirm_email = new FormControl ('', [Validators.required, Validators.email, CustomValidators.equalTo(email)]);

    const password = new FormControl ('', Validators.required);
    const confirm_password = new FormControl ('', [Validators.required, CustomValidators.equalTo(password)]);

    this.form = new FormGroup ({
      first_name: new FormControl ('', Validators.required),
      last_name: new FormControl ('', Validators.required),
      email: email,
      confirmar_email: confirm_email,
      password: password,
      confirmar_password: confirm_password 
    });
  }

  async onSubmit () {
    const loading = await this.loadingController.create({
      message: 'Procesando Informacion ...'
    });

    await loading.present ();

    const value = this.form.value;

    this.auth.createUserWithEmailAndPassword (value.email, value.password)
      .then (async (res: any) => {
        const new_user: any = {
          id: res.user.uid,
          email: res.user.email,
          join_date: new Date().toISOString (),
          first_name: value.first_name,
          last_name: value.last_name,
          phone_number: '', 
          avatar: '',
          is_pro: false,
          actual_state: 'activo',
          detail_state: ''
        };

        await this.database.addUser (new_user).then (async (response: any) => {
          loading.dismiss ();

          const toast = await this.toastController.create({
            message: 'Bienvenido a PuntoPro',
            duration: 2000,
            position: 'top'
          });

          toast.present();

          this.navCtrl.navigateRoot ('home');
        }, error => {
          loading.dismiss ();
          console.log ('Add user error, ', error);
        });
      }, async (error: any) => {
        loading.dismiss ();

        let message;

        if (error.code == "auth/email-already-in-use") {
          message = "Esta dirección de correo electrónico ya está siendo utilizada por otra persona."
        } else if (error.code == "auth/network-request-failed") {
          message = "No tienes acceso a internet, no se puede proceder."
        } else {
          message = error.message;
        }

        let alert = await this.alertController.create({
          header: 'Opppps!',
          message: message,
          buttons: ['OK']
        });

        await alert.present();
      });
  }

  google () {
    this.auth.googleLogin ();
  }

  facebook () {
    this.auth.facebookLogin ();
  }
}
