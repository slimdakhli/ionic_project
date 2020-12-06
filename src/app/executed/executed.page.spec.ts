import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExecutedPage } from './executed.page';

describe('ExecutedPage', () => {
  let component: ExecutedPage;
  let fixture: ComponentFixture<ExecutedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExecutedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
