import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WijmoComponentComponent } from './wijmo-component.component';

describe('WijmoComponentComponent', () => {
  let component: WijmoComponentComponent;
  let fixture: ComponentFixture<WijmoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WijmoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WijmoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
