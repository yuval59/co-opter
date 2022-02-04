import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { suggestionObj } from './suggestion-model'

@Injectable({
  providedIn: 'root'
})
export class SuggestionsService {

  constructor(private http: HttpClient) { }

  private getListURL = 'http://localhost:3000/api/getList'  // URL to web api
  private removeURL = 'http://localhost:3000/api/deleteSuggestion'  // URL to web api
  private changeURL = 'http://localhost:3000/api/changeSuggestion'  // URL to web api

  public unverifiedSuggestions: suggestionObj[] = []
  public verifiedSuggestions: suggestionObj[] = []
  public savedSuggestions: suggestionObj[] = []

  updateLists(): void {
    this.http.get<suggestionObj[]>(`${this.getListURL}?suggestion_state=unverified`).subscribe(item => this.unverifiedSuggestions = item)
    this.http.get<suggestionObj[]>(`${this.getListURL}?suggestion_state=verified`).subscribe(item => this.verifiedSuggestions = item)
    this.http.get<suggestionObj[]>(`${this.getListURL}?suggestion_state=saved`).subscribe(item => this.savedSuggestions = item)
  }

  removeSuggestion(id: string): void {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        suggestion_id: id
      },
    }
    this.http.delete(this.removeURL, options).subscribe()
  }

  changeSuggestion(id: string, new_state: string): void {
    this.http.post(this.changeURL, { suggestion_id: id, suggestion_state: new_state }).subscribe()
  }
}