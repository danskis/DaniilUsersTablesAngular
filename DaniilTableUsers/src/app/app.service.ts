import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

export interface TableInfo{
    email: string,
    nickname?: string,
    years?: number
}
@Injectable({providedIn: 'root'})
export class AppService {

    emailSubject = new BehaviorSubject<string>('');
    Data;

    constructor(private req: HttpClient){}

    getEmails(): Observable<TableInfo[]>{
        return this.req.get<TableInfo[]>('http://localhost:3000/emails');
    }

}