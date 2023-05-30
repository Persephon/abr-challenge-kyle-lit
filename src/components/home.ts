import { css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { MobxLitElement } from '@adobe/lit-mobx'

import { store } from '../index'

@customElement('km-home')
export class Home extends MobxLitElement {
  @property({ type: Number })
  count = 0

  public onBeforeEnter(location: Location) {
    store.route.setRoute(location.pathname);
  }


// render () {
//   return html`
// <div *ngIf="fishStore.fishes.length > 0">
//     <mat-card class="region-card" 
//         *ngFor="let region of fishStore.regions; trackBy: trackByRegionId">
//         <mat-card-header>
//             <mat-card-title>{{region.name}}</mat-card-title>
//         </mat-card-header>
//         <mat-card-content>
//             <div>Average Calories: {{region.averageCalories}}</div>
//             <div>Average Fat: {{region.averageFat}}</div>
//         </mat-card-content>
//         <mat-card-actions>
//             <a mat-button href="{{'/region/' + region.id }}">View Region</a>
//         </mat-card-actions>
//     </mat-card>
// </div>
// <div *ngIf="fishStore.fishes.length <= 0">Loading...</div>
//   `;

  render() {
    return html`

    <div>${store.route.name}</div>
      <div class="card">
        <button @click=${this._onClick} part="button">
          count is ${this.count}
        </button>
      </div>
    `
  }

  private _onClick() {
    this.count++
  }

  static styles = css``
}

declare global {
  interface HTMLElementTagNameMap {
    'km-home': Home
  }
}
