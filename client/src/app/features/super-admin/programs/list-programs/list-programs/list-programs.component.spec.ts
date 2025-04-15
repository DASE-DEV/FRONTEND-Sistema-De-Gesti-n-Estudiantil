import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProgramsComponent } from './list-programs.component';

describe('ListProgramsComponent', () => {
  let component: ListProgramsComponent;
  let fixture: ComponentFixture<ListProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListProgramsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
