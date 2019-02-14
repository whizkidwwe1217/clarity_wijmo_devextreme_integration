import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevExtremeComponentComponent } from './dev-extreme-component.component';

describe('DevExtremeComponentComponent', () => {
  let component: DevExtremeComponentComponent;
  let fixture: ComponentFixture<DevExtremeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevExtremeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevExtremeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
