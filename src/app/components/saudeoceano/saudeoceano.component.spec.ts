import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaudeoceanoComponent } from './saudeoceano.component';

describe('SaudeoceanoComponent', () => {
  let component: SaudeoceanoComponent;
  let fixture: ComponentFixture<SaudeoceanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaudeoceanoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaudeoceanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
