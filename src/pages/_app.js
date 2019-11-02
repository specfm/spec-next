// @flow
import App from 'next/app';
import * as React from 'react';
import Head from 'next/head';
import * as Sentry from '@sentry/browser';
import { theme } from '../components/theme';
import GlobalPlayerContext, {
  defaultPlayerContext,
} from '../components/GlobalPlayer/context';
import GlobalPlayer from '../components/GlobalPlayer';
import { GlobalStyles } from '../../public/static/normalize';
import type { SimplecastEpisode } from '../../types';

const SENTRY_PUBLIC_DSN =
  'https://7248f7abd384414b9fc10797611eff46@sentry.io/1323990';

class MyApp extends App {
  constructor() {
    super();

    Sentry.init({ dsn: SENTRY_PUBLIC_DSN });

    this.state = {
      ...defaultPlayerContext,
      addTrackToQueue: this.addTrackToQueue,
      clearQueue: this.clearQueue,
      pause: this.pause,
      play: this.play,
      scrub: this.scrub,
      onProgress: this.onProgress,
      onTrackEnded: this.onTrackEnded,
    };
  }

  // $FlowFixMe
  componentDidCatch(error: mixed, errorInfo: any) {
    Sentry.configureScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
    });
    Sentry.captureException(error);

    // This is needed to render errors correctly in development / production
    super.componentDidCatch(error, errorInfo);
  }

  addTrackToQueue = (episode: SimplecastEpisode) => {
    this.setState(state => ({
      ...state,
      isPlaying: true,
      trackQueue: [episode],
      progress: 0,
      displaySubscriptions: false,
    }));
  };

  clearQueue = () =>
    this.setState(state => ({
      ...state,
      trackQueue: [],
      progress: 0,
      displaySubscriptions: false,
      isPlaying: false,
    }));

  getAudioElement = () =>
    document && document.getElementById('global-player-audio');

  pause = () => {
    const el = this.getAudioElement();
    if (el) {
      // $FlowIssue
      el.pause();
      this.setState(state => ({ ...state, isPlaying: false }));
    }
  };

  play = () => {
    const el = this.getAudioElement();
    if (el) {
      // $FlowIssue
      el.play();
      this.setState(state => ({ ...state, isPlaying: true }));
    }
  };

  scrub = (ev: any) => {
    const { value } = ev.target;
    const el = this.getAudioElement();

    if (el) {
      // $FlowIssue
      el.currentTime = value;
      this.setState(state => ({ ...state, progress: value }));
      this.play();
    }
  };

  onProgress = () => {
    const el = this.getAudioElement();
    if (el) {
      // $FlowIssue
      this.setState(state => ({ ...state, progress: el.currentTime }));
    }
  };

  onTrackEnded = () => {
    this.pause();
    this.setState(state => ({
      ...state,
      displaySubscriptions: true,
      progress: 0,
    }));
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <GlobalStyles />
        <Head>
          <title>Spec · Level Up</title>
          <meta content="@specfm" name="twitter:site" key="twitter:site" />
          <meta content="Spec · Level Up" name="og:title" key="og:title" />
          <meta
            content="Podcasts and resources to help designers and developers level up"
            name="og:description"
            key="og:description"
          />
          <meta
            content="Spec · Level Up"
            name="twitter:title"
            key="twitter:title"
          />
          <meta name="og:type" content="website" key="og:type" />
          <meta
            name="og:image"
            content="https://spec.fm/static/og-image.jpg"
            key="og:image"
          />
          <meta name="og:site_name" content="Spec" key="og:site_name" />
          <meta name="theme-color" content="#212325" key="theme-color" />
          <meta
            name="description"
            content="Podcasts and resources to help designers and developers level up"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="static/meta/apple-touch-icon.png"
          />
          <link rel="manifest" href="/static/meta/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/static/meta/safari-pinned-tab.svg"
            color="#212325"
          />
          <meta name="msapplication-TileColor" content="#ffffff" />

          <script
            src="https://browser.sentry-cdn.com/4.2.4/bundle.min.js"
            crossOrigin="anonymous"
          />

          <link rel="preconnect" href="https://spec.fm/api" />

          {this.props.styleTags}
        </Head>

        <GlobalPlayerContext.Provider value={this.state}>
          <Component {...pageProps} />
          <GlobalPlayer />
        </GlobalPlayerContext.Provider>
      </React.Fragment>
    );
  }
}

export default MyApp;
