import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnEnlaceComponent } from './btn-enlace.component';

describe('BtnEnlaceComponent', () => {
  let component: BtnEnlaceComponent;
  let fixture: ComponentFixture<BtnEnlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnEnlaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnEnlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
