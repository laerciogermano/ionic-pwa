import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { Router } from '@angular/router';
import { Config } from 'src/constants/Config';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  public routeSignIn: string = '/auth/signin';

  constructor(
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit() { }

  public async onSubmit(form): Promise<void>{
    try{
      const res = await this.api.register(form.value);
      localStorage.setItem(Config.KEY_ACCESS_TOKEN, res.accessToken);
      this.router.navigateByUrl('/home');
    }catch(err){
      alert('mostra mensagem de erro');
    } 
  }

}
