import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteuserComponent } from './deleteuser.component';

describe('DeleteuserComponent', () => {
  let component: DeleteuserComponent;
  let fixture: ComponentFixture<DeleteuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteuserComponent]
    });
    fixture = TestBed.createComponent(DeleteuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
