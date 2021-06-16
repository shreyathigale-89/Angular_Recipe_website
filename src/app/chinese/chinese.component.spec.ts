import { ComponentFixture, TestBed } from '@angular/core/testing';
import { from } from 'rxjs';

import { ChineseComponent } from './chinese.component';

import{ HttpClientTestingModule } from'@angular/common/http/testing'

describe('ChineseComponent', () => {
  let component: ChineseComponent;
  let fixture: ComponentFixture<ChineseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ ChineseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChineseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
