import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Objeto3DComponent } from './objeto3-d.component';

describe('Objeto3DComponent', () => {
  let component: Objeto3DComponent;
  let fixture: ComponentFixture<Objeto3DComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Objeto3DComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Objeto3DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
