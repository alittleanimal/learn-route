import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    constructor() {
    }

    canLoad(): boolean {
        return true;
    }

    canActivate(): boolean {
        return true;
    }
}
