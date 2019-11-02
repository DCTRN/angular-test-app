import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegFormCodeComponent } from './reg-form-code.component';

describe('RegFormCodeComponent', () => {
  let component: RegFormCodeComponent;
  let fixture: ComponentFixture<RegFormCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegFormCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegFormCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
