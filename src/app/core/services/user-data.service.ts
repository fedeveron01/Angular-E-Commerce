import { Injectable } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root',
})
/**
 * user service class
 */
export class UserDataService {

    users: User[] = [];
    private url = "https://sysgestion.somee.com/api/usuarios/";

    constructor(private http:HttpClient) {
   
    }

    /**
     * get user by user name and password
     * @param userName 
     * @param password 
     */
    getUserByUserNameAndPassword(userName: string, password: string): User {
        let user: User = null;
        this.users.forEach(element => {
            if (element.nombre === userName && element.contrasena === password) {
                user = element;
            }
        });
        return user;
    }

    /**
     * add new user
     * @param userName 
     * @param password 
     * @param emailId 
     * @param birthDate 
     */


     login(usuario){
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this.http.post(this.url,usuario,{headers:headers});
     }
}