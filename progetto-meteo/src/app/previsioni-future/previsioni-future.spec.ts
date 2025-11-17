import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevisioniFuture } from './previsioni-future';

describe('PrevisioniFuture', () => {
  let component: PrevisioniFuture;
  let fixture: ComponentFixture<PrevisioniFuture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrevisioniFuture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrevisioniFuture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
