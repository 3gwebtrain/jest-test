import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShellPopupComponent } from './shell-popup.component';

describe('ShellPopupComponent', () => {
  let component: ShellPopupComponent;
  let fixture: ComponentFixture<ShellPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
