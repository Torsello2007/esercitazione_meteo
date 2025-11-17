import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentMeteo } from './current-meteo';

describe('CurrentMeteo', () => {
  let component: CurrentMeteo;
  let fixture: ComponentFixture<CurrentMeteo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentMeteo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentMeteo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
