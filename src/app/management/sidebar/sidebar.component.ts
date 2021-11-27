import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebarItems = [
    {
      icon: "fa fa-user-friends",
      text: "Tin tuyển dụng",
      url: "/jobs"
    },
    {
      icon: "fa fa-user-friends",
      text: "Ứng viên",
      url: "/candidates"
    }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  /**
   * Điều hướng đến phân hệ nào
   */
  navigateToTab(url: string) {
    this.router.navigate([url]);
  }

}
