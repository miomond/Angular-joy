import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  track:boolean=true;
  constructor( ) { }

  ngOnInit() {
  }
show(){
  this.track = !this.track;
}


}
