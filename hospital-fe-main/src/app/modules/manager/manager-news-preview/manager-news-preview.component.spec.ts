import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerNewsPreviewComponent } from './manager-news-preview.component';

describe('ManagerNewsPreviewComponent', () => {
  let component: ManagerNewsPreviewComponent;
  let fixture: ComponentFixture<ManagerNewsPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerNewsPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerNewsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
