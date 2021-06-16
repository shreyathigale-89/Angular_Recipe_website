import { MatSnackBarModule ,MatSnackBar,MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  loginForm!: FormGroup;
  
  constructor(private snackBar:MatSnackBar) {   }
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'top';


  ngOnInit(): void {
    this.loginForm=new FormGroup(
      {
        email : new FormControl('',[Validators.required,Validators.email]),
        password : new FormControl('',[Validators.required,Validators.minLength(6)])

      }
    );
  }


  onLogin()
  {
  
    this.snackBar.open('Logged in Successfully!','',{

      verticalPosition: this.verticalPosition,
      duration: 5000,
  });
    (<HTMLInputElement>document.getElementById("loginform")).style.display = "none";

    (<HTMLInputElement>document.getElementById("Header")).style.opacity = "1";
  }
}
