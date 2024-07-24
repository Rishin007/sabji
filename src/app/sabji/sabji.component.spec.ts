import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabjiComponent } from './sabji.component';

describe('SabjiComponent', () => {
  let component: SabjiComponent;
  let fixture: ComponentFixture<SabjiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SabjiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
