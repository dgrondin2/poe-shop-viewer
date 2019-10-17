import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StashTabsComponent } from './stash-tabs.component';

describe('StashTabsComponent', () => {
  let component: StashTabsComponent;
  let fixture: ComponentFixture<StashTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StashTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StashTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
