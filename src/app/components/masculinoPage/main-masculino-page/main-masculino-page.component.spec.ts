import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMasculinoPageComponent } from './main-masculino-page.component';

describe('MainMasculinoPageComponent', () => {
  let component: MainMasculinoPageComponent;
  let fixture: ComponentFixture<MainMasculinoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainMasculinoPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainMasculinoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
