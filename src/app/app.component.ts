import {
  AfterViewInit,
  Component,
  // ViewChild
} from '@angular/core';
// import {CommentComponent} from './modules/+shared/components/comment/comment.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  // time: any = '';
  // @ViewChild('childOne') childOne: CommentComponent;
  // @ViewChild('childTwo') childTwo: CommentComponent;
  // bug_from_child: boolean = false;
  //
  // showMe($event: CustomEvent) {
  //   this.time = $event.detail;
  // }
  //
  ngAfterViewInit(): void {
    // setTimeout(() => { // this hint fixes error change after check
    //   this.childTwo.gretter('prived');
    // }, 0);
  }
}
