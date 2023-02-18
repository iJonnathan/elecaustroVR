import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroInformativoComponent } from './cuadro-informativo.component';

describe('CuadroInformativoComponent', () => {
  let component: CuadroInformativoComponent;
  let fixture: ComponentFixture<CuadroInformativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadroInformativoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadroInformativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
