import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAssetStep1Component } from './create-asset-step1.component';

describe('CreateAssetStep1Component', () => {
  let component: CreateAssetStep1Component;
  let fixture: ComponentFixture<CreateAssetStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAssetStep1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAssetStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
