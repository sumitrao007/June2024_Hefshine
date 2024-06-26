import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InbuildPipeComponent } from './inbuild-pipe.component';

describe('InbuildPipeComponent', () => {
  let component: InbuildPipeComponent;
  let fixture: ComponentFixture<InbuildPipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InbuildPipeComponent]
    });
    fixture = TestBed.createComponent(InbuildPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
