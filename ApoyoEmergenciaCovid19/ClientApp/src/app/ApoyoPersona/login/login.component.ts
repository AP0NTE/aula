import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private formBuilder: FormBuilder,

    private route: ActivatedRoute,

    private router: Router,

    private authenticationService: AuthenticationService,

    private modalService: NgbModal) {

    if (this.authenticationService.currentUserValue) {

      this.router.navigate(['/']);

    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({

      username: ['', Validators.required],

      password: ['', Validators.required]

    });

    // get return url from route parameters or default to '/'

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

}

get f() { return this.loginForm.controls; }

onSubmit() {

this.submitted = true;

// stop here if form is invalid

if (this.loginForm.invalid) {

return;

}

this.loading = true;

this.authenticationService.login(this.f.username.value, this.f.password.value)

.pipe(first())

.subscribe(

data => {

this.router.navigate([this.returnUrl]);

},

error => {

const modalRef = this.modalService.open(AlertModalComponent);

modalRef.componentInstance.title = 'Acceso Denegado';

modalRef.componentInstance.message = error.error;

this.loading = false;

});

}