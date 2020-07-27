import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashbrownComponent } from './hashbrown.component';

describe('HashbrownComponent', () => {
  let component: HashbrownComponent;
  let fixture: ComponentFixture<HashbrownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashbrownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashbrownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
