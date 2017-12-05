/* tslint:disable:no-unused-variable */
import {
  async,
  fakeAsync,
  tick,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';

//NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not
// provided the TodoService as a dependency to TodosComponent.
//
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below.

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [TodosComponent],
        imports: [HttpModule],
        providers: [TodoService]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  xit('should load todos from the server (service method returns observable)', () => {
    let service = TestBed.get(TodoService);

    spyOn(service, 'getTodos').and.returnValue(Observable.from([[1, 2, 3]]));

    fixture.detectChanges();

    expect(component.todos.length).toBe(3);
  });

  it(
    'should load todos from the server (async() & whenStable() usage demo)',
    async(() => {
      let service = TestBed.get(TodoService);

      spyOn(service, 'getTodosPromise').and.returnValue(
        Promise.resolve([1, 2, 3, 4])
      );

      fixture.detectChanges();

      fixture.whenStable().then(() => {
        expect(component.todos.length).toBe(4);
        console.log('Expect called.');
      });
    })
  );

  xit(
    'should load todos from the server (fakeAsync() & tick() usage demo)',
    fakeAsync(() => {
      let service = TestBed.get(TodoService);

      spyOn(service, 'getTodosPromise').and.returnValue(
        Promise.resolve([1, 2, 3])
      );

      fixture.detectChanges();

      tick();
      expect(component.todos.length).toBe(3);
      console.log('Expect called.');
    })
  );
});
