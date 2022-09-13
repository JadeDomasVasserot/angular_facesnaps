import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFacesnapComponent } from './single-facesnap.component';

describe('SingleFacesnapComponent', () => {
  let component: SingleFacesnapComponent;
  let fixture: ComponentFixture<SingleFacesnapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleFacesnapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleFacesnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
