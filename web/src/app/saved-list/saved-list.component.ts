import { Component, OnInit } from '@angular/core'

import { SuggestionsService } from '../suggestions.service'

@Component({
  selector: 'app-saved-list',
  templateUrl: './saved-list.component.html',
  styleUrls: ['./saved-list.component.css']
})
export class SavedListComponent implements OnInit {

  constructor(public SuggestionsService: SuggestionsService) { }

  ngOnInit(): void { }

  demoteSuggestion(id: string): void {
    this.SuggestionsService.changeSuggestion(id, 'verified')
    setTimeout(() => {
      this.SuggestionsService.updateLists()
    }, 100)
  }

  removeSuggestion(id: string): void {
    this.SuggestionsService.removeSuggestion(id)
    setTimeout(() => {
      this.SuggestionsService.updateLists()
    }, 100)
  }

}
