import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AutenticacaoService } from "./autenticacao.service";

@Injectable({
  providedIn: "root",
})
export class AutorizacaoService implements CanActivate {
  constructor(
    private router: Router,
    private autenticacao: AutenticacaoService
  ) {}

  canActivate(): boolean {
    if (!this.autenticacao.isAuthenticated()) {
      this.router.navigate(["login"]);
      return false;
    }
    return true;
  }
}
