import "./drawer.js";
import { html, PolymerElement } from "../../../node_modules/@polymer/polymer/polymer-element.js";
import "../../../node_modules/@material/mwc-icon-button/mwc-icon-button.js";
import "../../../node_modules/@material/mwc-top-app-bar/mwc-top-app-bar.js";
import "../../../node_modules/@material/mwc-drawer/mwc-drawer.js";
/**
 * @customElement
 * @polymer
 */

class Header extends PolymerElement {
  static get template() {
    return html`
      <style>
        mwc-drawer {
          --mdc-drawer-width: 375px;
          font-family: 'roboto', sans-serif;
        }

        .c-drawer__content {
          padding: 0 10px;
        }

        ul {
          list-style: none;
          padding: 0 10px;
          margin: 0;
        }

        ul li {
          margin-bottom: 15px;
        }

        ul li a {
          color: #000;
          text-decoration: none;
        }
      </style>

      <mwc-drawer hasHeader type="modal">
        <span slot="title">[[title]]</span>
        <div class="c-drawer__content">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div slot="appContent">
          <mwc-top-app-bar>
            <mwc-icon-button
              on-click="toggleDrawer"
              icon="menu"
              slot="navigationIcon"
            ></mwc-icon-button>
            <div slot="title">[[title]]</div>
            <mwc-icon-button icon="code" slot="actionItems"></mwc-icon-button>
            <mwc-icon-button icon="print" slot="actionItems"></mwc-icon-button>
            <mwc-icon-button
              icon="favorite"
              slot="actionItems"
            ></mwc-icon-button>
          </mwc-top-app-bar>
        </div>
      </mwc-drawer>
    `;
  }

  static get properties() {
    return {
      title: {
        type: String
      }
    };
  }

  toggleDrawer() {
    const drawer = this.shadowRoot.querySelector('mwc-drawer');

    if (drawer) {
      const container = drawer.parentNode;
      container.addEventListener('MDCTopAppBar:nav', () => {
        drawer.open = !drawer.open;
      });
    }
  }

}

customElements.define('app-header', Header);