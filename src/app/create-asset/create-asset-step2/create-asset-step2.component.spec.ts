import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAssetStep2Component } from './create-asset-step2.component';

describe('CreateAssetStep2Component', () => {
  let component: CreateAssetStep2Component;
  let fixture: ComponentFixture<CreateAssetStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAssetStep2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAssetStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
