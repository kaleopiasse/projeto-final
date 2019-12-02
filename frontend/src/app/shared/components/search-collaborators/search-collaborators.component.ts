import { Observable } from 'rxjs';
import { finalize, map, startWith, tap } from 'rxjs/operators';
import { User } from 'src/app/core/models';
import { UserService } from 'src/app/core/services';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-collaborators',
  templateUrl: './search-collaborators.component.html',
  styleUrls: ['./search-collaborators.component.scss']
})
export class SearchCollaboratorsComponent implements OnInit {

  userForm = new FormGroup({
    user: new FormControl(),
  });

  users: User[];

  filteredUsers: Observable<User[]>;


  constructor(
    private readonly userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.getAllUsers()
      .pipe(
        tap(res => this.users = res.items),
        finalize(() => {
          this.filteredUsers = this.userForm.controls.user.valueChanges
          .pipe(
            startWith(''),
            map(user => user ? this.filterUsers(user) : this.users.slice())
          );
        }),
      ).subscribe();
  }

  private filterUsers(value: string): User[] {
    const filterValue = value.toLowerCase();
    return this.users.filter(user => user.name.toLowerCase().indexOf(filterValue) === 0);
  }

}
