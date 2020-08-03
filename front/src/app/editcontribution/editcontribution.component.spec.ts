import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcontributionComponent } from './editcontribution.component';

describe('EditcontributionComponent', () => {
  let component: EditcontributionComponent;
  let fixture: ComponentFixture<EditcontributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcontributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcontributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
