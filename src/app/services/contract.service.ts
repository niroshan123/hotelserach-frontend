import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contract } from '../models/contract';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) { }
}
