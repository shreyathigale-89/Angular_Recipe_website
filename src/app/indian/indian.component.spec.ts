import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianComponent } from './indian.component';

describe('IndianComponent', () => {
  let component: IndianComponent;
  let fixture: ComponentFixture<IndianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({

      imports:[HttpClientTestingModule],
      declarations: [ IndianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
