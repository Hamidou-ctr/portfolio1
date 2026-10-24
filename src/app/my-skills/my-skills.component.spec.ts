import { provideTestingDefaults } from '../../testing/test-providers';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySkillsComponent } from './my-skills.component';

describe('MySkillsComponent', () => {
  let component: MySkillsComponent;
  let fixture: ComponentFixture<MySkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySkillsComponent],
      providers: [provideTestingDefaults()],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MySkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
