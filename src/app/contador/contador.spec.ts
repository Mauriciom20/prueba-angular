import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contador } from './contador';

describe('Contador', () => {
  let component: Contador;
  let fixture: ComponentFixture<Contador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Contador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
