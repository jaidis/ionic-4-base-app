import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
 selectedPath = '';

  pages = [
    {
      title: 'Página con pestañas',
      url: '/menu/first'
    },
    {
      title: 'Otra página',
      url: '/menu/second'
    },
    {
      title: 'Perfil',
      url:'/menu/perfil'
    }
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {

  }

}
