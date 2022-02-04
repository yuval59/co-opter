import { Component, OnInit } from '@angular/core'

import { SuggestionsService } from '../suggestions.service'

@Component({
  selector: 'app-verified-list',
  templateUrl: './verified-list.component.html',
  styleUrls: ['./verified-list.component.css']
})
export class VerifiedListComponent implements OnInit {

  constructor(public SuggestionsService: SuggestionsService) { }

  ngOnInit(): void { }

  removeSuggestion(id: string): void {
    this.SuggestionsService.removeSuggestion(id)
    setTimeout(() => {
      this.SuggestionsService.updateLists()
    }, 100)
  }

  promoteSuggestion(id: string): void {
    this.SuggestionsService.changeSuggestion(id, 'saved')
    setTimeout(() => {
      this.SuggestionsService.updateLists()
    }, 100)
  }

}
