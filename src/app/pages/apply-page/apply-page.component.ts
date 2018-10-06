import { Component, OnInit } from '@angular/core';
import schema from '../../schemas/question-schema';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'apply-page',
  templateUrl: './apply-page.component.html',
  styleUrls: ['./apply-page.component.less']
})
export class ApplyPageComponent implements OnInit {

  questionSchema: any;
  isSuccess: boolean;


  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.questionSchema = schema;
    this.questionSchema.data = {};
  }

  onSubmit(data) {
    this.apiService.createApply(data).subscribe(response => {
      this.isSuccess = true;
    });
  }

  backward() {
    this.isSuccess = false;
  }

}
