import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subscriber } from 'rxjs';

export interface ResourceOne{
    id: string,
    name: string,
    date: string,
}

@Injectable()
export class ResourceOneService{
    private url = 'assets/api/resource-one/resource-one.json';
    
    constructor(private http:Http) { }

    getResourceOne(): Observable<ResourceOne[]> {
        return this.http.get(this.url).map((res: Response) => res.json());
    }
}
