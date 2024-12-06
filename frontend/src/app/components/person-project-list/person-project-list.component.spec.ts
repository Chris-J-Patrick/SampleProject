import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonProjectListComponent } from './person-project-list.component';

describe('PersonProjectListComponent', () => {
  let component: PersonProjectListComponent;
  let fixture: ComponentFixture<PersonProjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonProjectListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
