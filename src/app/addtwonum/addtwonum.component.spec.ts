import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtwonumComponent } from './addtwonum.component';

describe('AddtwonumComponent', () => {
  let component: AddtwonumComponent;
  let fixture: ComponentFixture<AddtwonumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtwonumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtwonumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
