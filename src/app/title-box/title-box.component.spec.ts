import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleBoxComponent } from './title-box.component';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TitleBoxComponent', () => {
  let component: TitleBoxComponent;
  let fixture: ComponentFixture<TitleBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TitleBoxComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set title', () => {
    component.title = 'TEST TITLE';
    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css('h3')).nativeElement.innerText
    ).toEqual('TEST TITLE');
  });
});
