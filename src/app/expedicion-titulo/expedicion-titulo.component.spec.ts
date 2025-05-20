import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedicionTituloComponent } from './expedicion-titulo.component';

describe('ExpedicionTituloComponent', () => {
  let component: ExpedicionTituloComponent;
  let fixture: ComponentFixture<ExpedicionTituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpedicionTituloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpedicionTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
