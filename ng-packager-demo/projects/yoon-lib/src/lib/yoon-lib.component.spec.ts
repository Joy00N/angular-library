import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoonLibComponent } from './yoon-lib.component';

describe('YoonLibComponent', () => {
  let component: YoonLibComponent;
  let fixture: ComponentFixture<YoonLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoonLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoonLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
