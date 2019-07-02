import {
  AfterContentChecked,
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  AfterContentInit,
  OnChanges,
  DoCheck,
  AfterViewChecked,
  Input,
  SimpleChanges
} from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
// DoCheck,
export class LifecycleComponent
  implements
    OnInit,
    OnDestroy,
    AfterViewInit,
    AfterContentInit,
    OnChanges,
    AfterViewChecked,
    AfterContentChecked {
  @Input() title = 'initial title';

  onTitleClick() {
    this.title += 'titleclick';
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }
  // ngDoCheck(): void {
  //   console.log('ngDoCheck');
  // }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngOnInit() {
    console.log('ngOnInit');
  }
}
