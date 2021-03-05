import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.less']
})
export class WorkListComponent implements OnInit {
  workList: any[] = [
    {
      img: '',
      title: 'Срочный выкуп авто',
      text: 'Быстрый выкуп авто - это удобно, деньги у Вас буквально через пару часов.',
      isMobile: true
    },
    {
      img: '',
      title: 'Срочный выкуп авто',
      text: 'Быстрый выкуп авто - это удобно, деньги у Вас буквально через пару часов.',
      isMobile: true
    },
    {
      img: '',
      title: 'Срочный выкуп авто',
      text: 'Быстрый выкуп авто - это удобно, деньги у Вас буквально через пару часов.',
      isMobile: true
    },
    {
      img: '',
      title: 'Срочный выкуп авто',
      text: 'Быстрый выкуп авто - это удобно, деньги у Вас буквально через пару часов.',
      isMobile: true
    },
    {
      img: '',
      title: 'Срочный выкуп авто',
      text: 'Быстрый выкуп авто - это удобно, деньги у Вас буквально через пару часов.',
      isMobile: true
    },
    {
      img: '',
      title: 'Срочный выкуп авто',
      text: 'Быстрый выкуп авто - это удобно, деньги у Вас буквально через пару часов.',
      isMobile: true
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
