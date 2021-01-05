import { Component, OnInit } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { AutenticacaoService } from "../services/autenticacao.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage {
  private user: string;
  private password: string;

  constructor(
    private autenticacao: AutenticacaoService,
    public toastController: ToastController
  ) {}

  ionViewWillEnter() {
    this.user = "";
    this.password = "";
  }

  login() {
    if (!this.autenticacao.login(this.user, this.password)) {
      this.presentToast("User or Password is invalid!");
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
    });
    toast.present();
  }
}
