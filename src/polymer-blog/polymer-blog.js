import { html, PolymerElement } from '@polymer/polymer/polymer-element.js'

import './header/header'
import './posts/blog-post'

/**
 * @customElement
 * @polymer
 */
class PolymerBlog extends PolymerElement {
  constructor() {
    super()
  }

  static get template() {
    return html`
      <style>
        :host app-post {
          display: flex;
          flex-wrap: wrap;
        }
      </style>
      <app-header title="Wegrix Resources"></app-header>
      <app-post></app-post>
    `
  }
}

customElements.define('polymer-blog', PolymerBlog)
