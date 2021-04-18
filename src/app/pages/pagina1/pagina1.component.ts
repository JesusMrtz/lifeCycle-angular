import { Component, OnInit, DoCheck, OnChanges,
   AfterContentInit, AfterContentChecked, AfterViewInit,
   AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})

export class Pagina1Component implements OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  name = '';
  seconds = 0;
  timerSubscription!: Subscription;
  constructor() {
    console.log('Constructor');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.timerSubscription.unsubscribe();
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.timerSubscription = interval(1000).subscribe(response => {
      this.seconds = response;
    });
  }

  save(): void {}

}
