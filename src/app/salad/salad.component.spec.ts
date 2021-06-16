import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladComponent } from './salad.component';

describe('SaladComponent', () => {
  let component: SaladComponent;
  let fixture: ComponentFixture<SaladComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      
      imports:[HttpClientTestingModule],
      declarations: [ SaladComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
