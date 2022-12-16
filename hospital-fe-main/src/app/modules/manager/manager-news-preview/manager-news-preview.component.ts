import { Component, OnInit } from '@angular/core';
import { ManagerNews } from '../../hospital/model/managerNews.model';
import { ManagerNewsService } from '../../hospital/services/managerNews.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-manager-news-preview',
  templateUrl: './manager-news-preview.component.html',
  styleUrls: ['./manager-news-preview.component.css']
})
export class ManagerNewsPreviewComponent implements OnInit {
  public displayedColumns = ['BloodBank', 'Title', 'Body', 'Date', 'Time'];
  public news: ManagerNews[] = [];
  public newsPubl: ManagerNews[] = [];
  public newsArch: ManagerNews[] = [];

  constructor(private managerNewsService : ManagerNewsService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.managerNewsService.getManagerNewsPending().subscribe(res => {
      this.news = res;
    })
    this.managerNewsService.getManagerNewsPublished().subscribe(res => {
      this.newsPubl = res;
    })
    this.managerNewsService.getManagerNewsArchived().subscribe(res => {
      this.newsArch = res;
    })
    // this.managerNewsService.getManagerNews().subscribe(res => {
    //   this.news = res;
    //   this.dataSource.data = this.news;
    // })
  }

  archive(id: any): void {
    this.managerNewsService.archiveNews(id).subscribe(res => {
      this.openSnackBar('News successfully archived!', 'Close');
      this.managerNewsService.getManagerNewsPending().subscribe(res => {
        this.news = res;
      })
      this.managerNewsService.getManagerNewsPublished().subscribe(res => {
        this.newsPubl = res;
      })
      this.managerNewsService.getManagerNewsArchived().subscribe(res => {
        this.newsArch = res;
      })
    },
    error => {
      if (error.status == 500){
        this.openSnackBar('Can not archive news!', 'Close');
      }
    });
  }

  publish(id: any): void {
    this.managerNewsService.publishNews(id).subscribe(res => {
      this.openSnackBar('News successfully published!', 'Close');
      this.managerNewsService.getManagerNewsPending().subscribe(res => {
        this.news = res;
      })
      this.managerNewsService.getManagerNewsPublished().subscribe(res => {
        this.newsPubl = res;
      })
      this.managerNewsService.getManagerNewsArchived().subscribe(res => {
        this.newsArch = res;
      })
    },
    error => {
      if (error.status == 500){
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
