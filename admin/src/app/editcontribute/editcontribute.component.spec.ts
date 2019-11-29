import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcontributeComponent } from './editcontribute.component';

describe('EditcontributeComponent', () => {
  let component: EditcontributeComponent;
  let fixture: ComponentFixture<EditcontributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcontributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcontributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
