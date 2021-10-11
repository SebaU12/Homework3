import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService{

	constructor(private httpClient: HttpClient){ }

	getmenu(): Observable<any> {
		return this.httpClient.get("http://localhost:3050/menu")
	}
}