import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StashTabContentComponent } from './stash-tab-content.component';

describe('StashTabContentComponent', () => {
  let component: StashTabContentComponent;
  let fixture: ComponentFixture<StashTabContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StashTabContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StashTabContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
