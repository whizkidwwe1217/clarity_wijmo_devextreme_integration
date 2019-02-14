import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClarityGridComponent } from './clarity-grid.component';

describe('ClarityGridComponent', () => {
  let component: ClarityGridComponent;
  let fixture: ComponentFixture<ClarityGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClarityGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClarityGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
