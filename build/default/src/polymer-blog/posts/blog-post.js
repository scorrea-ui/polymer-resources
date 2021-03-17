import { PolymerElement, html } from "../../../node_modules/@polymer/polymer/polymer-element.js";
import "../../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js";
import { posts } from "../../mock/blog-posts.js";

class BlogPost extends PolymerElement {
  static get template() {
    return html`
      <style>
        .c-card {
          font-family: 'roboto', sans-serif;
          border-radius: 4px;
          box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
            0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
          display: flex;
          flex-direction: column;
          min-height: 250px;
          width: 100%;
          justify-content: center;
          margin: 15px auto;
          max-width: 95%;
        }

        @media screen and (min-width: 440px) {
          max-width: 80%;
        }

        @media screen and (min-width: 700px) {
          .c-card {
            width: calc(50% - 30px);
            margin: 15px;
          }
        }

        @media screen and (min-width: 1024px) {
          .c-card {
            width: 25%;
            justify-content: flex-start;
            margin: 25px 15px 15px 15px;
            max-width: 330px;
          }
        }

        .c-card__media {
          position: relative;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }

        .c-card__media::before {
          display: block;
          content: '';
          margin-top: 56.25%;
        }

        .c-card__wrapper {
          padding: 16px 16px 0 16px;
        }

        .c-card__title {
          font-family: Roboto, sans-serif;
          font-size: 1.25rem;
          line-height: 2rem;
          font-weight: 500;
          letter-spacing: 0.0125em;
          margin: 0;
        }

        .c-card__subtitle {
          font-family: Roboto, sans-serif;
          font-size: 0.875rem;
          line-height: 1.25rem;
          font-weight: 400;
          letter-spacing: 0.0178571429em;
          opacity: 0.6;
          margin: 0;
        }

        .c-card__content {
          font-family: Roboto, sans-serif;
          font-size: 0.875rem;
          line-height: 1.25rem;
          font-weight: 400;
          letter-spacing: 0.0178571429em;
          opacity: 0.6;
        }

        .c-card__actions {
          display: flex;
          flex-direction: row;
          align-items: center;
          box-sizing: border-box;
          min-height: 52px;
          padding: 8px;
        }

        .c-card__btn {
          margin-left: 0;
          margin-right: 8px;
          padding: 0 8px;
          display: inline-flex;
          flex-direction: row;
          align-items: center;
          box-sizing: border-box;
          justify-content: center;
          cursor: pointer;
          user-select: none;
          height: 36px;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          will-change: transform, opacity;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.0892857143em;
          text-decoration: none;
          text-transform: uppercase;
          min-width: 64px;
          border: none;
          outline: none;
          line-height: inherit;
          position: relative;
          appearance: none;
          overflow: visible;
          vertical-align: middle;
          border-radius: 4px;
        }

        .c-card__btn:hover {
          cursor: pointer;
          background-color: #6200ee;
        }

        .c-card__btn:not(:disabled) {
          background-color: transparent;
        }
      </style>

      <template is="dom-repeat" items="[[posts]]">
        <div class="c-card">
          <div
            class="c-card__media"
            style="background-image: url({{item.backgroundImage}})"
          ></div>
          <div class="c-card__wrapper">
            <h3 class="c-card__title">{{item.title}}</h3>
            <p class="c-card__subtitle">{{item.subtitle}}</p>
          </div>
          <div class="c-card__wrapper">
            <p class="c-card__content">{{item.content}}</p>
          </div>
          <div class="c-card__actions">
            <a class="c-card__btn" href="{{item.link}}" target="_blank"
              >Read more about {{item.title}}</a
            >
          </div>
        </div>
      </template>
    `;
  }

  ready() {
    super.ready();
  }

  static get properties() {
    return {
      backgroundImage: {
        type: String,
        value: 'https://devmagazine.co/wp-content/uploads/2018/06/Polymer-3.png'
      },
      posts: {
        type: Array,
        value: () => [...posts]
      }
    };
  }

}

customElements.define('app-post', BlogPost);