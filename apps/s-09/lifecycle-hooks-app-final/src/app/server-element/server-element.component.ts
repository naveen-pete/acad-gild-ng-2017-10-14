import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent
  implements OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.name, '=> ngOnChanges called!');
    console.log('  ngOnChanges()', this.name, '=>', changes);
  }

  ngOnInit() {
    console.log(this.name, '=> ngOnInit called!');
    // console.log(
    //   '  ngOnInit()',
    //   this.name,
    //   '=> Header Text: ' + this.header.nativeElement.innerText
    // );
    // console.log(
    //   '  ngOnInit()',
    //   this.name,
    //   '=> Paragraph Text: ' + this.paragraph.nativeElement.innerText
    // );
  }

  ngDoCheck() {
    console.log(this.name, '=> ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log(this.name, '=> ngAfterContentInit called!');
    // console.log(
    //   '  ngAfterContentInit()',
    //   this.name,
    //   '=> Paragraph Text: ' + this.paragraph.nativeElement.innerText
    // );
  }

  ngAfterContentChecked() {
    console.log(this.name, '=> ngAfterContentChecked called!');
    // console.log(
    //   '  ngAfterContentChecked()',
    //   this.name,
    //   '=> Paragraph Text: ' + this.paragraph.nativeElement.innerText
    // );
  }

  ngAfterViewInit() {
    console.log(this.name, '=> ngAfterViewInit called!');
    // console.log(
    //   '  ngAfterViewInit()',
    //   this.name,
    //   '=> Header Text: ' + this.header.nativeElement.innerText
    // );
  }

  ngAfterViewChecked() {
    console.log(this.name, '=> ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log(this.name, '=> ngOnDestroy called!');
  }
}
