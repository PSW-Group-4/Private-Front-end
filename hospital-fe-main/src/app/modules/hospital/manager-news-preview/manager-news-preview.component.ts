import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ManagerNews } from '../model/managerNews.model';
import { ManagerNewsService } from '../services/managerNews.service';

@Component({
  selector: 'app-manager-news-preview',
  templateUrl: './manager-news-preview.component.html',
  styleUrls: ['./manager-news-preview.component.css']
})
export class ManagerNewsPreviewComponent implements OnInit {
  public dataSource = new MatTableDataSource<ManagerNews>();
  public displayedColumns = ['BloodBank', 'Title', 'Body', 'Date', 'Time'];
  public news: ManagerNews[] = [];

  constructor(private managerNewsService : ManagerNewsService) { }

  ngOnInit(): void {
    this.managerNewsService.getManagerNews().subscribe(res => {
      this.news = res;
      this.dataSource.data = this.news;
    })
  }

}
