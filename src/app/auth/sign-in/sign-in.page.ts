import { Component, OnInit } from '@angular/core';
import { Config } from 'src/constants/Config';
import { ApiService } from 'src/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  constructor(
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit() { }

  public async onSubmit(form): Promise<void>{
    try{
      const res = await this.api.login(form.value);
      localStorage.setItem(Config.KEY_ACCESS_TOKEN, res.accessToken);
      this.router.navigateByUrl('/home');
    }catch(err){
      alert('mostra mensagem de erro');
    } 
  }

}
