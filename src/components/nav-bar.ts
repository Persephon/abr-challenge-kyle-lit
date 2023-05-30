import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { MobxLitElement } from "@adobe/lit-mobx";

import { store } from "../index";

@customElement("km-nav-bar")
export class NavBar extends MobxLitElement {
    render() {
        return html`<div>
            <a href="/home">Home</a>
            ${store.regions.map((region) => html`
                <a href="/region/${region.id}">${region.name}</a>
            `)}
        </div>`
    }

    static styles = css``;
}

declare global {
    interface HTMLElementTagNameMap {
        "km-nav-bar": NavBar;
    }
}
