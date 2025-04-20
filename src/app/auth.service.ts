import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenSignal = signal<string | null>(null);
  private userSignal = signal<any>(null);

  constructor() { }
  setToken(token: string, user: any) {
    this.tokenSignal.set(token);
    this.userSignal.set(user);
  }
  get token() {
    return this.tokenSignal;
  }
  get user() {
    return this.userSignal;
  }

  clearData() {
    this.tokenSignal.set(null);  
    this.userSignal.set(null);   
  }

  get isAuthenticated(): boolean {
    return this.tokenSignal() !== null;
  }
}
