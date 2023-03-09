import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

export interface TableInfo{
    email: string,
    title: string,
    content: string
}
@Injectable({providedIn: 'root'})
export class AppService {

    emailSubject = new BehaviorSubject<string>('');
    constructor(private req: HttpClient){}

    getEmails(): Observable<TableInfo[]>{
        return this.req.get<TableInfo[]>('http://localhost:3000/emails');
    }

}