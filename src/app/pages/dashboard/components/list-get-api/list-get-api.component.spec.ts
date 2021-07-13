import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGetApiComponent } from './list-get-api.component';

describe('ListGetApiComponent', () => {
  let component: ListGetApiComponent;
  let fixture: ComponentFixture<ListGetApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGetApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGetApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
