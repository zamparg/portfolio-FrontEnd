import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoProyectoComponent } from './nuevo-proyecto.component';

describe('NuevoProyectoComponent', () => {
  let component: NuevoProyectoComponent;
  let fixture: ComponentFixture<NuevoProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoProyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
