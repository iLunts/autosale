import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.less']
})
export class WorkListComponent implements OnInit {
  workList: any[] = [
    {
      img: '/assets/svg/work-icon.svg',
      title: 'Срочный выкуп авто',
      text: 'Быстрый выкуп авто - это удобно, деньги у Вас буквально через пару часов.',
      isMobile: true
    },
    {
      img: '/assets/svg/work-icon.svg',
      title: 'Авто после ДТП',
      text: 'Состояние значения не имеет. От "немного поцарапана" до "полностью на запчасти".',
      isMobile: true
    },
    {
      img: '/assets/svg/work-icon.svg',
      title: 'Аварийные авто',
      text: 'Выкупаем автомобили после серьезных аварий или пожара, эвакуатор за наш счет.',
      isMobile: true
    },
    {
      img: '/assets/svg/work-icon.svg',
      title: 'Авто не на ходу',
      text: 'Нет желания "реанимировать" авто не на ходу - обращайтесь к нам, мы сами к Вам приедем за авто.',
      isMobile: true
    },
    {
      img: '/assets/svg/work-icon.svg',
      title: 'Выкуп дорогих авто',
      text: 'Сложно продать дорогой автомобиль по хорошей цене - обращайтесь к нам.',
      isMobile: true
    },
    {
      img: '/assets/svg/work-icon.svg',
      title: 'В любой точке страны',
      text: 'Наш оценщик готов бесплатно выехать в любую точку Беларуси, даже самую отдаленную.',
      isMobile: true
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
