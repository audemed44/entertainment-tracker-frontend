import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAnimeCardComponent } from './top-anime-card.component';

describe('TopAnimeCardComponent', () => {
  let component: TopAnimeCardComponent;
  let fixture: ComponentFixture<TopAnimeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopAnimeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAnimeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
