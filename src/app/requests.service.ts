import { environment } from "./../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user";
import { Repo } from "./repo";

@Injectable({
  providedIn: "root"
})
export class RequestsService {
  user: User;
  repos: Repo;
  username:string;

  constructor(private http: HttpClient) {
    this.user = new User("", "", "", 0, 0, 0,new Date);
    this.repos = new Repo("", "", "");
    this.username = 'danielevans-999'
  }

  getProfileInfo() {
    
    interface ApiResponse {
      name: string;
      login: string;
      avatar_url: string;
      public_repos: number;
      followers: number;
      following: number;
       created_at:Date;
    }

    let promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(
          "https://api.github.com/users/" +
           this.username +
            "?access_token=" +
            environment.accesstoken
        )
        .toPromise()
        .then(
          profile => {
            this.user = profile;
            resolve();
          },
          error => {
            throw new error(
              "Something went wrong while trying to load resource"
            );
            reject(error);
          }
        );
    });
    return promise;
  }

  getRepos() {
    interface RepoResponse {
      name: string;
      description: string;
      html_url: string;

    }

    let promise = new Promise((resolve, reject) => {
      this.http
        .get<RepoResponse>(
          "https://api.github.com/users/" +
            this.username +
            "/repos?access_token=" +
            environment.accesstoken
        )
        .toPromise()
        .then(
          repo => {
            this.repos = repo;
            resolve();
          },
          error => {
            throw new error(
              "something went wrong while trying to load resource"
            );
            reject(error);
          }
        );
    });
    return promise;
  }

  updateUserName(username:string){
    this.username = username;
  }
}
