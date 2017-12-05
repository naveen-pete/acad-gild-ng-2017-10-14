import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BasicAnimationComponent } from './basic-animation/basic-animation.component';
import { AdvancedTransitionsComponent } from './advanced-transitions/advanced-transitions.component';
import { BooksService } from './services/books.service';
import { EnterLeaveStateComponent } from './enter-leave-state/enter-leave-state.component';
import { MultiStepAnimationComponent } from './multi-step-animation/multi-step-animation.component';
import { ParallelAnimationComponent } from './parallel-animation/parallel-animation.component';
import { AnimationCallbacksComponent } from './animation-callbacks/animation-callbacks.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicAnimationComponent,
    AdvancedTransitionsComponent,
    EnterLeaveStateComponent,
    MultiStepAnimationComponent,
    ParallelAnimationComponent,
    AnimationCallbacksComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule {}
