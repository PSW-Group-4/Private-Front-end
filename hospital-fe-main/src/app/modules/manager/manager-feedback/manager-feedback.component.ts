import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackManagerResponseDto } from './Model/feedbackManagerResponseDto.model';
import { FeedbackService } from './Service/Feedback/feedback.service';

@Component({
  selector: 'app-manager-feedback',
  templateUrl: './manager-feedback.component.html',
  styleUrls: ['./manager-feedback.component.css']
})
export class ManagerFeedbackComponent implements OnInit {
  feedbacksManager:FeedbackManagerResponseDto[]=[]
  constructor(private feedbackService: FeedbackService, private router: Router) { }

  ngOnInit(): void {
    this.fillFeedbackTable();
  }

  fillFeedbackTable(): void{
      this.feedbackService.getAllFeedbacks().subscribe(res => {
      this.feedbacksManager = res;})

  }

  convertIsPublic(IsPublic: Boolean): string{
    if (IsPublic) return "Public";
    return "Private";
  }

  convertStatus(status: number ): string{
    switch (status) {
      case 0:
        return "Published"
      case 1:
        return "Hidden"
      case 2:
        return "Pending"
      default:
        return "Pending"

    }
  }

  Publish(id: string): void{
         let PublishHideDTO =[ {
      "op": "replace",
      "path": "status",
      "value":"0"

    }]


      this.feedbackService.publishHideFeedback(id,PublishHideDTO).subscribe(res => {
      this.fillFeedbackTable();
      })
   }

  Hide(id: string): void {
         let PublishHideDTO =[ {
      "op": "replace",
      "path": "status",
      "value": "1"

    }]


  this.feedbackService.publishHideFeedback(id,PublishHideDTO).subscribe(res => {
      this.fillFeedbackTable();
      })
  }

}
