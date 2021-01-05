import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AutenticacaoService {
  private logged = false;

  constructor(private router: Router) {}

  login(user: string, password: string): boolean {
    if (user === password) {
      this.logged = true;
      this.router.navigate(["home"]);
      return true;
    }
    this.logged = false;
    return false;
  }

  logout() {
    this.logged = false;
    this.router.navigate(["login"]);
  }

  isAuthenticated(): boolean {
    return this.logged;
  }
}
