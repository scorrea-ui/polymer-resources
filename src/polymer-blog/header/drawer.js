import { html, PolymerElement } from '@polymer/polymer/polymer-element'
import '@material/mwc-drawer'

/**
 * @customElement
 * @polymer
 */

class Drawer extends PolymerElement {
  constructor() {
    super()
  }

  static get template() {
    return html` <mwc-drawer hasHeader type="modal">
      <span slot="title">Drawer Title</span>
      <span slot="subtitle">subtitle</span>
      <div>
        <p>Drawer content!</p>
        <mwc-icon-button icon="gesture"></mwc-icon-button>
        <mwc-icon-button icon="gavel"></mwc-icon-button>
      </div>
      <div slot="appContent">
        <mwc-top-app-bar>
          <mwc-icon-button slot="navigationIcon" icon="menu"></mwc-icon-button>
          <div slot="title">Title</div>
        </mwc-top-app-bar>
        <div>
          <p>Main Content!</p>
        </div>
      </div>
    </mwc-drawer>`
  }
}

customElements.define('app-drawer', Drawer)
