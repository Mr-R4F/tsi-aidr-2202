import { Component, OnInit } from '@angular/core';
import { Timezone } from 'src/app/model/timezone';
import { TimezoneService } from 'src/app/service/timezone.service';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.css']
})
export class TimezoneComponent implements OnInit {
  timezone = '';
  datetime?: Timezone;

  constructor(private timezoneService: TimezoneService) { }

  ngOnInit(): void {
  }

  obterHora() {
    this.timezoneService.obterTimezone(this.timezone).subscribe(time => {
      this.datetime = time;
    })
  }
}
