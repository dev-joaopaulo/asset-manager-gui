import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetCardListComponent } from './asset-card-list.component';

describe('AssetCardListComponent', () => {
  let component: AssetCardListComponent;
  let fixture: ComponentFixture<AssetCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
