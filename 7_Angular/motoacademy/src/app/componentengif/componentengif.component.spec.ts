import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentengifComponent } from './componentengif.component';

describe('ComponentengifComponent', () => {
  let component: ComponentengifComponent;
  let fixture: ComponentFixture<ComponentengifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentengifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentengifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
