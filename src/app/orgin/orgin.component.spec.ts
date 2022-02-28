import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrginComponent } from './orgin.component';

describe('OrginComponent', () => {
  let component: OrginComponent;
  let fixture: ComponentFixture<OrginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
