import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {User} from "../../model/user.entity";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'actions'] ;
  dataSource: MatTableDataSource<any>;
  userData: User;

  constructor(private userService: UsersService) {
    this.userData = {} as User;
    this.dataSource = new MatTableDataSource<any>();
  }

  getAllUser(){
    this.userService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
      console.log(response);
    })
  }

  ngOnInit(): void {
    this.getAllUser();
  }

}
