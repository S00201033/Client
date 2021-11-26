import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerFormCompenent } from './player-form.component';

describe('PlayerFormCompenent', () => {
  let component: PlayerFormCompenent;
  let fixture: ComponentFixture<PlayerFormCompenent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerFormCompenent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerFormCompenent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
