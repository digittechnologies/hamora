import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapvComponent } from './mapv.component';

describe('MapvComponent', () => {
  let component: MapvComponent;
  let fixture: ComponentFixture<MapvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
