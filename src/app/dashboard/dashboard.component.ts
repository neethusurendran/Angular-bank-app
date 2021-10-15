import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  depositForm = this.fb.group({

    acno: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4)]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })

  withdrawForm = this.fb.group({

    acno: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4)]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })
  userName : any



  constructor(private ds: DataService, private fb: FormBuilder) { 
    this.userName = localStorage.getItem("userName")
  }

  ngOnInit(): void {
  }
  deposit() {

    if (this.depositForm.valid) {
      var acno = this.depositForm.value.acno;
      var pswd = this.depositForm.value.pswd;
      var amount = this.depositForm.value.amount;
       this.ds.deposit(acno,pswd,amount)
       .subscribe((result:any)=>{
        if (result) {
          alert(result.message)
        }
      },
       (result)=>{

       
        alert(result.error.message);
        
      })
    }
      else{
        alert("invalid form")
      }
    }
      //var result = this.ds.deposit(acno, pswd, amount)

  //     if (result) {
  //       alert(amount + "credited successfully and new balance is: " + result)
  //     }
  //   }
  //   else {
  //     alert("invalid form")
  //   }
  // }

  withdraw() {

    if (this.withdrawForm.valid) {
      var acno = this.withdrawForm.value.acno;
      var pswd = this.withdrawForm.value.pswd;
      var amount = this.withdrawForm.value.amount;

      this.ds.withdraw(acno,pswd,amount)
       .subscribe((result:any)=>{
        if (result) {
          alert(result.message)
        }
      },
       (result)=>{

       
        alert(result.error.message);
        
      })
    }
      else{
        alert("invalid form")
      }
    }
  }
//       var result = this.ds.withdraw(acno, pswd, amount)

//       if (result) {
//         alert(amount + "debited successfully and new balance is: " + result)

//       }
//     }
//     else {
//       alert("invalid form")
//     }
//   }
// }