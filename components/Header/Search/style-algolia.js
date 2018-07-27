// @flow
import { injectGlobal } from 'styled-components'

injectGlobal`
  .ais-InstantSearch__root {
    width: 100%;
    position: relative;
  }

  .ais-Hits {
    position: absolute;
    top: 48px;
    left: 50%;
    width: 50%;
    height: 100%;
    transform: translateX(-50%);
    width: 100%;
    background: #FFF;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transition: all 0.2s ease-in-out;
    border-radius: 4px;
    z-index: 999;
    display: flex;
    flex-direction: column;
    flex: none;
    height: auto;
    max-height: 400px;
    overflow-y: scroll;
    max-width: 100%;
  }

  @media (max-width: 968px) {
    .ais-Hits {
      top: 54px;
    }
  }

  .ais-Hits-list {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 0;
    height: auto;
  }

  .ais-Hits-item {
    display: flex;
    flex: 1 0 auto;
    width: 100%;
    padding: 0;
    margin: 0;
    border: 0!important;
    box-shadow: none;
    cursor: pointer;
  }

  .ais-Hits-item a {
    width: 100%;
  }

  .ais-Hits-item > div {
    padding: 0!important;
    margin: 0!important;
    border: 0!important;
  }

  .ais-Hits-item:last-of-type section {
    border-bottom: 0;
  }
`