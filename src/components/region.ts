import { css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { MobxLitElement } from '@adobe/lit-mobx'

import { store } from '../index'

@customElement('km-region')
export class Region extends MobxLitElement {
  public onBeforeEnter(location: Location) {
    store.route.setRoute(location.pathname);
  }

  render() {
    return html`
    <div>
      <h1>${store.currentRegion.name}</h1>
      <div>Average Calories: ${store.currentRegion.averageCalories}</div>
      <div>Average Fat: ${store.currentRegion.averageFat}</div>
    </div>`
  }

  static styles = css``
}

declare global {
  interface HTMLElementTagNameMap {
    'km-region': Region
  }
}
