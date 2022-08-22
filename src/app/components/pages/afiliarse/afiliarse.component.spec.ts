import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfiliarseComponent } from './afiliarse.component';

describe('AfiliarseComponent', () => {
  let component: AfiliarseComponent;
  let fixture: ComponentFixture<AfiliarseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfiliarseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfiliarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
