import { Component, OnInit } from '@angular/core'

import { SuggestionsService } from '../suggestions.service'

@Component({
  selector: 'app-unverified-list',
  templateUrl: './unverified-list.component.html',
  styleUrls: ['./unverified-list.component.css']
})
export class UnverifiedListComponent implements OnInit {

  constructor(public SuggestionsService: SuggestionsService) { }

  ngOnInit(): void { this.SuggestionsService.updateLists() }

  removeSuggestion(id: string): void {
    this.SuggestionsService.removeSuggestion(id)
    setTimeout(() => {
      this.SuggestionsService.updateLists()
    }, 100)
  }

  promoteSuggestion(id: string): void {
    this.SuggestionsService.changeSuggestion(id, 'verified')
    setTimeout(() => {
      this.SuggestionsService.updateLists()
    }, 100)
  }

}