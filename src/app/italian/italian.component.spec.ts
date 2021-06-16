import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalianComponent } from './italian.component';

describe('ItalianComponent', () => {
  let component: ItalianComponent;
  let fixture: ComponentFixture<ItalianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({

      imports:[HttpClientTestingModule],
      declarations: [ ItalianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItalianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
