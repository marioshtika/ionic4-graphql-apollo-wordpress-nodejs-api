import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public data: any;

  constructor(public apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
          {
            generalSettings {
              url
            }
          }
        `,
      })
      .valueChanges.subscribe(data => {
        console.log(data);
        this.data = data;
      });
  }

}
