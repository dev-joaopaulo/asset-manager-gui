import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsControlComponent } from './assets-control.component';

describe('AssetsControlComponent', () => {
  let component: AssetsControlComponent;
  let fixture: ComponentFixture<AssetsControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
