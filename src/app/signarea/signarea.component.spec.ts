import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignareaComponent } from './signarea.component';

describe('SignareaComponent', () => {
  let component: SignareaComponent;
  let fixture: ComponentFixture<SignareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
