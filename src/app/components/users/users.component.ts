import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { AdminService } from 'src/app/services/admin.service';

interface UserElement {
  id: number;
  name: string;
  contactNumber: number;
  email: string;
}
>>>>>>> 71665e0a363c07f5f8bc5bc1be4e56f14a4c3e8a

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
<<<<<<< HEAD
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

=======
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'contactNumber', 'email'];
  dataSource: UserElement[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getAllUsers().subscribe((data) => {
      this.dataSource = data.map<UserElement>((data) => {
        const formattedUser: UserElement = {
          id: data.userId,
          name: data.name,
          contactNumber: data.contactNumber,
          email: data.email,
        };

        return formattedUser;
      });
    });
  }
>>>>>>> 71665e0a363c07f5f8bc5bc1be4e56f14a4c3e8a
}
