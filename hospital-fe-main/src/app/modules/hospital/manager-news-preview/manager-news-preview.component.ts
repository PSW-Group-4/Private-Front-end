import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ManagerNews } from '../model/managerNews.model';
import { ManagerNewsService } from '../services/managerNews.service';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-manager-news-preview',
  templateUrl: './manager-news-preview.component.html',
  styleUrls: ['./manager-news-preview.component.css']
})
export class ManagerNewsPreviewComponent implements OnInit {
  public dataSource = new MatTableDataSource<ManagerNews>();
  public displayedColumns = ['BloodBank', 'Title', 'Body', 'Date', 'Time'];
  public news: ManagerNews[] = [];

  constructor(private managerNewsService : ManagerNewsService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.managerNewsService.getManagerNews().subscribe(res => {
      this.news = res;
      this.dataSource.data = this.news;
    })
  }

  archive(id: any): void {
    this.managerNewsService.archiveNews(id).subscribe(res => {
      this.openSnackBar('News successfully archived!', 'Close');
    },
    error => {
      if (error.status = 500){
        this.openSnackBar('Can not archive news!', 'Close');
      }
    });
  }

  publish(id: any): void {
    this.managerNewsService.publishNews(id).subscribe(res => {
      this.openSnackBar('News successfully published!', 'Close');
    },
    error => {
      if (error.status = 500){
        this.openSnackBar('Can not publish news!', 'Close');
      }
    });
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
