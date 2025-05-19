import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorFiltrosComponent } from './sensor-filtros.component';

describe('SensorFiltrosComponent', () => {
  let component: SensorFiltrosComponent;
  let fixture: ComponentFixture<SensorFiltrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SensorFiltrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensorFiltrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
