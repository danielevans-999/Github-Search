import { RequestsService } from "../requests.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-repos",
  templateUrl: "./user-repos.component.html",
  styleUrls: ["./user-repos.component.css"]
})
export class UserReposComponent implements OnInit {
  repos: any;
  username: string;

  constructor(private repoService: RequestsService) {}

  findRepos() {
    this.repoService.updateUserName(this.username);
    this.repoService.getRepos();
    this.repos = this.repoService.repos;
  }

  ngOnInit() {}
}
