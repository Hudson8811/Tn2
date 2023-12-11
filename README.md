

body.compensate-for-scrollbar {
  overflow: hidden;
}

.fancybox-active {
  height: auto;
}

.fancybox-is-hidden {
  left: -9999px;
  margin: 0;
  position: absolute !important;
  top: -9999px;
  visibility: hidden;
}

.fancybox-container {
  -webkit-backface-visibility: hidden;
  height: 100%;
  left: 0;
  outline: none;
  position: fixed;
  -webkit-tap-highlight-color: transparent;
  top: 0;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  transform: translateZ(0);
  width: 100%;
  z-index: 99992;
}

.fancybox-container * {
  box-sizing: border-box;
}

.fancybox-bg, .fancybox-inner, .fancybox-outer, .fancybox-stage {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.fancybox-outer {
  -webkit-overflow-scrolling: touch;
  overflow-y: auto;
}

.fancybox-bg {
  background: #1e1e1e;
  opacity: 0;
  transition-duration: inherit;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.47, 0, 0.74, 0.71);
}

.fancybox-is-open .fancybox-bg {
  opacity: 0.9;
  transition-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
}

.fancybox-caption, .fancybox-infobar, .fancybox-navigation .fancybox-button, .fancybox-toolbar {
  direction: ltr;
  opacity: 0;
  position: absolute;
  transition: opacity 0.25s ease, visibility 0s ease 0.25s;
  visibility: hidden;
  z-index: 99997;
}

.fancybox-show-caption .fancybox-caption, .fancybox-show-infobar .fancybox-infobar, .fancybox-show-nav .fancybox-navigation .fancybox-button, .fancybox-show-toolbar .fancybox-toolbar {
  opacity: 1;
  transition: opacity 0.25s ease 0s, visibility 0s ease 0s;
  visibility: visible;
}

.fancybox-infobar {
  color: #ccc;
  font-size: 13px;
  -webkit-font-smoothing: subpixel-antialiased;
  height: 44px;
  left: 0;
  line-height: 44px;
  min-width: 44px;
  mix-blend-mode: difference;
  padding: 0 10px;
  pointer-events: none;
  top: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.fancybox-toolbar {
  right: 0;
  top: 0;
}

.fancybox-stage {
  direction: ltr;
  overflow: visible;
  transform: translateZ(0);
  z-index: 99994;
}

.fancybox-is-open .fancybox-stage {
  overflow: hidden;
}

.fancybox-slide {
  -webkit-backface-visibility: hidden;
  display: none;
  height: 100%;
  left: 0;
  outline: none;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  padding: 44px;
  position: absolute;
  text-align: center;
  top: 0;
  transition-property: transform, opacity;
  white-space: normal;
  width: 100%;
  z-index: 99994;
}

.fancybox-slide:before {
  content: "";
  display: inline-block;
  font-size: 0;
  height: 100%;
  vertical-align: middle;
  width: 0;
}

.fancybox-is-sliding .fancybox-slide, .fancybox-slide--current, .fancybox-slide--next, .fancybox-slide--previous {
  display: block;
}

.fancybox-slide--image {
  overflow: hidden;
  padding: 44px 0;
}

.fancybox-slide--image:before {
  display: none;
}

.fancybox-slide--html {
  padding: 6px;
}

.fancybox-content {
  background: #fff;
  display: inline-block;
  margin: 0;
  max-width: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  padding: 44px;
  position: relative;
  text-align: left;
  vertical-align: middle;
}

.fancybox-slide--image .fancybox-content {
  animation-timing-function: cubic-bezier(0.5, 0, 0.14, 1);
  -webkit-backface-visibility: hidden;
  background: transparent;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  left: 0;
  max-width: none;
  overflow: visible;
  padding: 0;
  position: absolute;
  top: 0;
  transform-origin: top left;
  transition-property: transform, opacity;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 99995;
}

.fancybox-can-zoomOut .fancybox-content {
  cursor: zoom-out;
}

.fancybox-can-zoomIn .fancybox-content {
  cursor: zoom-in;
}

.fancybox-can-pan .fancybox-content, .fancybox-can-swipe .fancybox-content {
  cursor: grab;
}

.fancybox-is-grabbing .fancybox-content {
  cursor: grabbing;
}

.fancybox-container [data-selectable=true] {
  cursor: text;
}

.fancybox-image, .fancybox-spaceball {
  background: transparent;
  border: 0;
  height: 100%;
  left: 0;
  margin: 0;
  max-height: none;
  max-width: none;
  padding: 0;
  position: absolute;
  top: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 100%;
}

.fancybox-spaceball {
  z-index: 1;
}

.fancybox-slide--iframe .fancybox-content, .fancybox-slide--map .fancybox-content, .fancybox-slide--pdf .fancybox-content, .fancybox-slide--video .fancybox-content {
  height: 100%;
  overflow: visible;
  padding: 0;
  width: 100%;
}

.fancybox-slide--video .fancybox-content {
  background: #000;
}

.fancybox-slide--map .fancybox-content {
  background: #e5e3df;
}

.fancybox-slide--iframe .fancybox-content {
  background: #fff;
}

.fancybox-iframe, .fancybox-video {
  background: transparent;
  border: 0;
  display: block;
  height: 100%;
  margin: 0;
  overflow: hidden;
  padding: 0;
  width: 100%;
}

.fancybox-iframe {
  left: 0;
  position: absolute;
  top: 0;
}

.fancybox-error {
  background: #fff;
  cursor: default;
  max-width: 400px;
  padding: 40px;
  width: 100%;
}

.fancybox-error p {
  color: #444;
  font-size: 16px;
  line-height: 20px;
  margin: 0;
  padding: 0;
}

.fancybox-button {
  background: rgba(30, 30, 30, 0.6);
  border: 0;
  border-radius: 0;
  box-shadow: none;
  cursor: pointer;
  display: inline-block;
  height: 44px;
  margin: 0;
  padding: 10px;
  position: relative;
  transition: color 0.2s;
  vertical-align: top;
  visibility: inherit;
  width: 44px;
}

.fancybox-button, .fancybox-button:link, .fancybox-button:visited {
  color: #ccc;
}

.fancybox-button:hover {
  color: #fff;
}

.fancybox-button:focus {
  outline: none;
}

.fancybox-button.fancybox-focus {
  outline: 1px dotted;
}

.fancybox-button[disabled], .fancybox-button[disabled]:hover {
  color: #888;
  cursor: default;
  outline: none;
}

.fancybox-button div {
  height: 100%;
}

.fancybox-button svg {
  display: block;
  height: 100%;
  overflow: visible;
  position: relative;
  width: 100%;
}

.fancybox-button svg path {
  fill: currentColor;
  stroke-width: 0;
}

.fancybox-button--fsenter svg:nth-child(2), .fancybox-button--fsexit svg:first-child, .fancybox-button--pause svg:first-child, .fancybox-button--play svg:nth-child(2) {
  display: none;
}

.fancybox-progress {
  background: #ff5268;
  height: 2px;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform: scaleX(0);
  transform-origin: 0;
  transition-property: transform;
  transition-timing-function: linear;
  z-index: 99998;
}

.fancybox-close-small {
  background: transparent;
  border: 0;
  border-radius: 0;
  color: #ccc;
  cursor: pointer;
  opacity: 0.8;
  padding: 8px;
  position: absolute;
  right: -12px;
  top: -44px;
  z-index: 401;
}

.fancybox-close-small:hover {
  color: #fff;
  opacity: 1;
}

.fancybox-slide--html .fancybox-close-small {
  color: currentColor;
  padding: 10px;
  right: 0;
  top: 0;
}

.fancybox-slide--image.fancybox-is-scaling .fancybox-content {
  overflow: hidden;
}

.fancybox-is-scaling .fancybox-close-small, .fancybox-is-zoomable.fancybox-can-pan .fancybox-close-small {
  display: none;
}

.fancybox-navigation .fancybox-button {
  background-clip: content-box;
  height: 100px;
  opacity: 0;
  position: absolute;
  top: calc(50% - 50px);
  width: 70px;
}

.fancybox-navigation .fancybox-button div {
  padding: 7px;
}

.fancybox-navigation .fancybox-button--arrow_left {
  left: 0;
  left: env(safe-area-inset-left);
  padding: 31px 26px 31px 6px;
}

.fancybox-navigation .fancybox-button--arrow_right {
  padding: 31px 6px 31px 26px;
  right: 0;
  right: env(safe-area-inset-right);
}

.fancybox-caption {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.15) 65%, rgba(0, 0, 0, 0.075) 75.5%, rgba(0, 0, 0, 0.037) 82.85%, rgba(0, 0, 0, 0.019) 88%, transparent);
  bottom: 0;
  color: #eee;
  font-size: 14px;
  font-weight: 400;
  left: 0;
  line-height: 1.5;
  padding: 75px 44px 25px;
  pointer-events: none;
  right: 0;
  text-align: center;
  z-index: 99996;
}

@supports (padding: max(0px)) {
  .fancybox-caption {
    padding: 75px max(44px, env(safe-area-inset-right)) max(25px, env(safe-area-inset-bottom)) max(44px, env(safe-area-inset-left));
  }
}
.fancybox-caption--separate {
  margin-top: -50px;
}

.fancybox-caption__body {
  max-height: 50vh;
  overflow: auto;
  pointer-events: all;
}

.fancybox-caption a, .fancybox-caption a:link, .fancybox-caption a:visited {
  color: #ccc;
  text-decoration: none;
}

.fancybox-caption a:hover {
  color: #fff;
  text-decoration: underline;
}

.fancybox-loading {
  animation: a 1s linear infinite;
  background: transparent;
  border: 4px solid #888;
  border-bottom-color: #fff;
  border-radius: 50%;
  height: 50px;
  left: 50%;
  margin: -25px 0 0 -25px;
  opacity: 0.7;
  padding: 0;
  position: absolute;
  top: 50%;
  width: 50px;
  z-index: 99999;
}

@keyframes a {
  to {
    transform: rotate(1turn);
  }
}
.fancybox-animated {
  transition-timing-function: cubic-bezier(0, 0, 0.25, 1);
}

.fancybox-fx-slide.fancybox-slide--previous {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.fancybox-fx-slide.fancybox-slide--next {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.fancybox-fx-slide.fancybox-slide--current {
  opacity: 1;
  transform: translateZ(0);
}

.fancybox-fx-fade.fancybox-slide--next, .fancybox-fx-fade.fancybox-slide--previous {
  opacity: 0;
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}

.fancybox-fx-fade.fancybox-slide--current {
  opacity: 1;
}

.fancybox-fx-zoom-in-out.fancybox-slide--previous {
  opacity: 0;
  transform: scale3d(1.5, 1.5, 1.5);
}

.fancybox-fx-zoom-in-out.fancybox-slide--next {
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
}

.fancybox-fx-zoom-in-out.fancybox-slide--current {
  opacity: 1;
  transform: scaleX(1);
}

.fancybox-fx-rotate.fancybox-slide--previous {
  opacity: 0;
  transform: rotate(-1turn);
}

.fancybox-fx-rotate.fancybox-slide--next {
  opacity: 0;
  transform: rotate(1turn);
}

.fancybox-fx-rotate.fancybox-slide--current {
  opacity: 1;
  transform: rotate(0deg);
}

.fancybox-fx-circular.fancybox-slide--previous {
  opacity: 0;
  transform: scale3d(0, 0, 0) translate3d(-100%, 0, 0);
}

.fancybox-fx-circular.fancybox-slide--next {
  opacity: 0;
  transform: scale3d(0, 0, 0) translate3d(100%, 0, 0);
}

.fancybox-fx-circular.fancybox-slide--current {
  opacity: 1;
  transform: scaleX(1) translateZ(0);
}

.fancybox-fx-tube.fancybox-slide--previous {
  transform: translate3d(-100%, 0, 0) scale(0.1) skew(-10deg);
}

.fancybox-fx-tube.fancybox-slide--next {
  transform: translate3d(100%, 0, 0) scale(0.1) skew(10deg);
}

.fancybox-fx-tube.fancybox-slide--current {
  transform: translateZ(0) scale(1);
}

@media (max-height: 576px) {
  .fancybox-slide {
    padding-left: 6px;
    padding-right: 6px;
  }
  .fancybox-slide--image {
    padding: 6px 0;
  }
  .fancybox-close-small {
    right: -6px;
  }
  .fancybox-slide--image .fancybox-close-small {
    background: #4e4e4e;
    color: #f2f4f6;
    height: 36px;
    opacity: 1;
    padding: 6px;
    right: 0;
    top: 0;
    width: 36px;
  }
  .fancybox-caption {
    padding-left: 12px;
    padding-right: 12px;
  }
  @supports (padding: max(0px)) {
    .fancybox-caption {
      padding-left: max(12px, env(safe-area-inset-left));
      padding-right: max(12px, env(safe-area-inset-right));
    }
  }
}
.fancybox-share {
  background: #f4f4f4;
  border-radius: 3px;
  max-width: 90%;
  padding: 30px;
  text-align: center;
}

.fancybox-share h1 {
  color: #222;
  font-size: 35px;
  font-weight: 700;
  margin: 0 0 20px;
}

.fancybox-share p {
  margin: 0;
  padding: 0;
}

.fancybox-share__button {
  border: 0;
  border-radius: 3px;
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  line-height: 40px;
  margin: 0 5px 10px;
  min-width: 130px;
  padding: 0 15px;
  text-decoration: none;
  transition: all 0.2s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  white-space: nowrap;
}

.fancybox-share__button:link, .fancybox-share__button:visited {
  color: #fff;
}

.fancybox-share__button:hover {
  text-decoration: none;
}

.fancybox-share__button--fb {
  background: #3b5998;
}

.fancybox-share__button--fb:hover {
  background: #344e86;
}

.fancybox-share__button--pt {
  background: #bd081d;
}

.fancybox-share__button--pt:hover {
  background: #aa0719;
}

.fancybox-share__button--tw {
  background: #1da1f2;
}

.fancybox-share__button--tw:hover {
  background: #0d95e8;
}

.fancybox-share__button svg {
  height: 25px;
  margin-right: 7px;
  position: relative;
  top: -1px;
  vertical-align: middle;
  width: 25px;
}

.fancybox-share__button svg path {
  fill: #fff;
}

.fancybox-share__input {
  background: transparent;
  border: 0;
  border-bottom: 1px solid #d7d7d7;
  border-radius: 0;
  color: #5d5b5b;
  font-size: 14px;
  margin: 10px 0 0;
  outline: none;
  padding: 10px 15px;
  width: 100%;
}

.fancybox-thumbs {
  background: #ddd;
  bottom: 0;
  display: none;
  margin: 0;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  padding: 2px 2px 4px;
  position: absolute;
  right: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  top: 0;
  width: 212px;
  z-index: 99995;
}

.fancybox-thumbs-x {
  overflow-x: auto;
  overflow-y: hidden;
}

.fancybox-show-thumbs .fancybox-thumbs {
  display: block;
}

.fancybox-show-thumbs .fancybox-inner {
  right: 212px;
}

.fancybox-thumbs__list {
  font-size: 0;
  height: 100%;
  list-style: none;
  margin: 0;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0;
  position: absolute;
  position: relative;
  white-space: nowrap;
  width: 100%;
}

.fancybox-thumbs-x .fancybox-thumbs__list {
  overflow: hidden;
}

.fancybox-thumbs-y .fancybox-thumbs__list::-webkit-scrollbar {
  width: 7px;
}

.fancybox-thumbs-y .fancybox-thumbs__list::-webkit-scrollbar-track {
  background: #fff;
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.fancybox-thumbs-y .fancybox-thumbs__list::-webkit-scrollbar-thumb {
  background: #2a2a2a;
  border-radius: 10px;
}

.fancybox-thumbs__list a {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: rgba(0, 0, 0, 0.1);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  float: left;
  height: 75px;
  margin: 2px;
  max-height: calc(100% - 8px);
  max-width: calc(50% - 4px);
  outline: none;
  overflow: hidden;
  padding: 0;
  position: relative;
  -webkit-tap-highlight-color: transparent;
  width: 100px;
}

.fancybox-thumbs__list a:before {
  border: 6px solid #ff5268;
  bottom: 0;
  content: "";
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 99991;
}

.fancybox-thumbs__list a:focus:before {
  opacity: 0.5;
}

.fancybox-thumbs__list a.fancybox-thumbs-active:before {
  opacity: 1;
}

@media (max-width: 576px) {
  .fancybox-thumbs {
    width: 110px;
  }
  .fancybox-show-thumbs .fancybox-inner {
    right: 110px;
  }
  .fancybox-thumbs__list a {
    max-width: calc(100% - 10px);
  }
} 

.swiper {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  overflow: clip;
  list-style: none;
  padding: 0;
  /* Fix of Webkit flickering */
  z-index: 1;
  display: block;
}

.swiper-vertical > .swiper-wrapper {
  flex-direction: column;
}

.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
  box-sizing: content-box;
}

.swiper-android .swiper-slide,
.swiper-ios .swiper-slide,
.swiper-wrapper {
  transform: translate3d(0px, 0, 0);
}

.swiper-horizontal {
  touch-action: pan-y;
}

.swiper-vertical {
  touch-action: pan-x;
}

.swiper-slide {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
  display: block;
}

.swiper-slide-invisible-blank {
  visibility: hidden;
}

/* Auto Height */
.swiper-autoheight,
.swiper-autoheight .swiper-slide {
  height: auto;
}

.swiper-autoheight .swiper-wrapper {
  align-items: flex-start;
  transition-property: transform, height;
}

.swiper-backface-hidden .swiper-slide {
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

/* 3D Effects */
.swiper-3d.swiper-css-mode .swiper-wrapper {
  perspective: 1200px;
}

.swiper-3d .swiper-wrapper {
  transform-style: preserve-3d;
}

.swiper-3d {
  perspective: 1200px;
}

.swiper-3d .swiper-slide,
.swiper-3d .swiper-cube-shadow {
  transform-style: preserve-3d;
}

/* CSS Mode */
.swiper-css-mode > .swiper-wrapper {
  overflow: auto;
  scrollbar-width: none;
  /* For Firefox */
  -ms-overflow-style: none;
  /* For Internet Explorer and Edge */
}

.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {
  display: none;
}

.swiper-css-mode > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: start start;
}

.swiper-css-mode.swiper-horizontal > .swiper-wrapper {
  scroll-snap-type: x mandatory;
}

.swiper-css-mode.swiper-vertical > .swiper-wrapper {
  scroll-snap-type: y mandatory;
}

.swiper-css-mode.swiper-free-mode > .swiper-wrapper {
  scroll-snap-type: none;
}

.swiper-css-mode.swiper-free-mode > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: none;
}

.swiper-css-mode.swiper-centered > .swiper-wrapper::before {
  content: "";
  flex-shrink: 0;
  order: 9999;
}

.swiper-css-mode.swiper-centered > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: center center;
  scroll-snap-stop: always;
}

.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {
  margin-inline-start: var(--swiper-centered-offset-before);
}

.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper::before {
  height: 100%;
  min-height: 1px;
  width: var(--swiper-centered-offset-after);
}

.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {
  margin-block-start: var(--swiper-centered-offset-before);
}

.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper::before {
  width: 100%;
  min-width: 1px;
  height: var(--swiper-centered-offset-after);
}

/* Slide styles start */
/* 3D Shadows */
.swiper-3d .swiper-slide-shadow,
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right,
.swiper-3d .swiper-slide-shadow-top,
.swiper-3d .swiper-slide-shadow-bottom,
.swiper-3d .swiper-slide-shadow,
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right,
.swiper-3d .swiper-slide-shadow-top,
.swiper-3d .swiper-slide-shadow-bottom {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}

.swiper-3d .swiper-slide-shadow {
  background: rgba(0, 0, 0, 0.15);
}

.swiper-3d .swiper-slide-shadow-left {
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}

.swiper-3d .swiper-slide-shadow-right {
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}

.swiper-3d .swiper-slide-shadow-top {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}

.swiper-3d .swiper-slide-shadow-bottom {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}

.swiper-lazy-preloader {
  width: 42px;
  height: 42px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -21px;
  margin-top: -21px;
  z-index: 10;
  transform-origin: 50%;
  box-sizing: border-box;
  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));
  border-radius: 50%;
  border-top-color: transparent;
}

.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,
.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader {
  animation: swiper-preloader-spin 1s infinite linear;
}

.swiper-lazy-preloader-white {
  --swiper-preloader-color: #fff;
}

.swiper-lazy-preloader-black {
  --swiper-preloader-color: #000;
}

@keyframes swiper-preloader-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/* Slide styles end */
.swiper-virtual .swiper-slide {
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);
}

.swiper-virtual.swiper-css-mode .swiper-wrapper::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
}

.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after {
  height: 1px;
  width: var(--swiper-virtual-size);
}

.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after {
  width: 1px;
  height: var(--swiper-virtual-size);
}

:root {
  --swiper-navigation-size: 44px;
  /*
  --swiper-navigation-top-offset: 50%;
  --swiper-navigation-sides-offset: 10px;
  --swiper-navigation-color: var(--swiper-theme-color);
  */
}

.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: var(--swiper-navigation-top-offset, 50%);
  width: calc(var(--swiper-navigation-size) / 44 * 27);
  height: var(--swiper-navigation-size);
  margin-top: calc(0px - var(--swiper-navigation-size) / 2);
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--swiper-navigation-color, var(--swiper-theme-color));
}

.swiper-button-prev.swiper-button-disabled,
.swiper-button-next.swiper-button-disabled {
  opacity: 0.35;
  cursor: auto;
  pointer-events: none;
}

.swiper-button-prev.swiper-button-hidden,
.swiper-button-next.swiper-button-hidden {
  opacity: 0;
  cursor: auto;
  pointer-events: none;
}

.swiper-navigation-disabled .swiper-button-prev,
.swiper-navigation-disabled .swiper-button-next {
  display: none !important;
}

.swiper-button-prev svg,
.swiper-button-next svg {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transform-origin: center;
}

.swiper-rtl .swiper-button-prev svg,
.swiper-rtl .swiper-button-next svg {
  transform: rotate(180deg);
}

.swiper-button-prev,
.swiper-rtl .swiper-button-next {
  left: var(--swiper-navigation-sides-offset, 10px);
  right: auto;
}

.swiper-button-next,
.swiper-rtl .swiper-button-prev {
  right: var(--swiper-navigation-sides-offset, 10px);
  left: auto;
}

.swiper-button-lock {
  display: none;
}

/* Navigation font start */
.swiper-button-prev:after,
.swiper-button-next:after {
  font-family: swiper-icons;
  font-size: var(--swiper-navigation-size);
  text-transform: none !important;
  letter-spacing: 0;
  font-variant: initial;
  line-height: 1;
}

.swiper-button-prev:after,
.swiper-rtl .swiper-button-next:after {
  content: "prev";
}

.swiper-button-next,
.swiper-rtl .swiper-button-prev {
  right: var(--swiper-navigation-sides-offset, 10px);
  left: auto;
}

.swiper-button-next:after,
.swiper-rtl .swiper-button-prev:after {
  content: "next";
}

/* Navigation font end */
:root {
  /*
  --swiper-pagination-color: var(--swiper-theme-color);
  --swiper-pagination-left: auto;
  --swiper-pagination-right: 8px;
  --swiper-pagination-bottom: 8px;
  --swiper-pagination-top: auto;
  --swiper-pagination-fraction-color: inherit;
  --swiper-pagination-progressbar-bg-color: rgba(0,0,0,0.25);
  --swiper-pagination-progressbar-size: 4px;
  --swiper-pagination-bullet-size: 8px;
  --swiper-pagination-bullet-width: 8px;
  --swiper-pagination-bullet-height: 8px;
  --swiper-pagination-bullet-border-radius: 50%;
  --swiper-pagination-bullet-inactive-color: #000;
  --swiper-pagination-bullet-inactive-opacity: 0.2;
  --swiper-pagination-bullet-opacity: 1;
  --swiper-pagination-bullet-horizontal-gap: 4px;
  --swiper-pagination-bullet-vertical-gap: 6px;
  */
}

.swiper-pagination {
  position: absolute;
  text-align: center;
  transition: 300ms opacity;
  transform: translate3d(0, 0, 0);
  z-index: 10;
}

.swiper-pagination.swiper-pagination-hidden {
  opacity: 0;
}

.swiper-pagination-disabled > .swiper-pagination,
.swiper-pagination.swiper-pagination-disabled {
  display: none !important;
}

/* Common Styles */
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: var(--swiper-pagination-bottom, 8px);
  top: var(--swiper-pagination-top, auto);
  left: 0;
  width: 100%;
}

/* Bullets */
.swiper-pagination-bullets-dynamic {
  overflow: hidden;
  font-size: 0;
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  transform: scale(0.33);
  position: relative;
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {
  transform: scale(1);
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
  transform: scale(1);
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
  transform: scale(0.66);
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {
  transform: scale(0.33);
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
  transform: scale(0.66);
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {
  transform: scale(0.33);
}

.swiper-pagination-bullet {
  width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));
  height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));
  display: inline-block;
  border-radius: var(--swiper-pagination-bullet-border-radius, 50%);
  background: var(--swiper-pagination-bullet-inactive-color, #000);
  opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);
}

button.swiper-pagination-bullet {
  border: none;
  margin: 0;
  padding: 0;
  box-shadow: none;
  -webkit-appearance: none;
  appearance: none;
}

.swiper-pagination-clickable .swiper-pagination-bullet {
  cursor: pointer;
}

.swiper-pagination-bullet:only-child {
  display: none !important;
}

.swiper-pagination-bullet-active {
  opacity: var(--swiper-pagination-bullet-opacity, 1);
  background: var(--swiper-pagination-color, var(--swiper-theme-color));
}

.swiper-vertical > .swiper-pagination-bullets,
.swiper-pagination-vertical.swiper-pagination-bullets {
  right: var(--swiper-pagination-right, 8px);
  left: var(--swiper-pagination-left, auto);
  top: 50%;
  transform: translate3d(0px, -50%, 0);
}

.swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;
  display: block;
}

.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
}

.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,
.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  display: inline-block;
  transition: 200ms transform, 200ms top;
}

.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);
}

.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
}

.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  transition: 200ms transform, 200ms left;
}

.swiper-horizontal.swiper-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  transition: 200ms transform, 200ms right;
}

/* Fraction */
.swiper-pagination-fraction {
  color: var(--swiper-pagination-fraction-color, inherit);
}

/* Progress */
.swiper-pagination-progressbar {
  background: var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, 0.25));
  position: absolute;
}

.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  background: var(--swiper-pagination-color, var(--swiper-theme-color));
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform: scale(0);
  transform-origin: left top;
}

.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  transform-origin: right top;
}

.swiper-horizontal > .swiper-pagination-progressbar,
.swiper-pagination-progressbar.swiper-pagination-horizontal,
.swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,
.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite {
  width: 100%;
  height: var(--swiper-pagination-progressbar-size, 4px);
  left: 0;
  top: 0;
}

.swiper-vertical > .swiper-pagination-progressbar,
.swiper-pagination-progressbar.swiper-pagination-vertical,
.swiper-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,
.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite {
  width: var(--swiper-pagination-progressbar-size, 4px);
  height: 100%;
  left: 0;
  top: 0;
}

.swiper-pagination-lock {
  display: none;
}

:root {
  /*
  --swiper-scrollbar-border-radius: 10px;
  --swiper-scrollbar-top: auto;
  --swiper-scrollbar-bottom: 4px;
  --swiper-scrollbar-left: auto;
  --swiper-scrollbar-right: 4px;
  --swiper-scrollbar-sides-offset: 1%;
  --swiper-scrollbar-bg-color: rgba(0, 0, 0, 0.1);
  --swiper-scrollbar-drag-bg-color: rgba(0, 0, 0, 0.5);
  --swiper-scrollbar-size: 4px;
  */
}

.swiper-scrollbar {
  border-radius: var(--swiper-scrollbar-border-radius, 10px);
  position: relative;
  touch-action: none;
  background: var(--swiper-scrollbar-bg-color, rgba(0, 0, 0, 0.1));
}

.swiper-scrollbar-disabled > .swiper-scrollbar,
.swiper-scrollbar.swiper-scrollbar-disabled {
  display: none !important;
}

.swiper-horizontal > .swiper-scrollbar,
.swiper-scrollbar.swiper-scrollbar-horizontal {
  position: absolute;
  left: var(--swiper-scrollbar-sides-offset, 1%);
  bottom: var(--swiper-scrollbar-bottom, 4px);
  top: var(--swiper-scrollbar-top, auto);
  z-index: 50;
  height: var(--swiper-scrollbar-size, 4px);
  width: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));
}

.swiper-vertical > .swiper-scrollbar,
.swiper-scrollbar.swiper-scrollbar-vertical {
  position: absolute;
  left: var(--swiper-scrollbar-left, auto);
  right: var(--swiper-scrollbar-right, 4px);
  top: var(--swiper-scrollbar-sides-offset, 1%);
  z-index: 50;
  width: var(--swiper-scrollbar-size, 4px);
  height: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));
}

.swiper-scrollbar-drag {
  height: 100%;
  width: 100%;
  position: relative;
  background: var(--swiper-scrollbar-drag-bg-color, rgba(0, 0, 0, 0.5));
  border-radius: var(--swiper-scrollbar-border-radius, 10px);
  left: 0;
  top: 0;
}

.swiper-scrollbar-cursor-drag {
  cursor: move;
}

.swiper-scrollbar-lock {
  display: none;
}

/* Zoom container styles start */
.swiper-zoom-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.swiper-zoom-container > img,
.swiper-zoom-container > svg,
.swiper-zoom-container > canvas {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* Zoom container styles end */
.swiper-slide-zoomed {
  cursor: move;
  touch-action: none;
}

/* a11y */
.swiper .swiper-notification {
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  opacity: 0;
  z-index: -1000;
}

.swiper-free-mode > .swiper-wrapper {
  transition-timing-function: ease-out;
  margin: 0 auto;
}

.swiper-grid > .swiper-wrapper {
  flex-wrap: wrap;
}

.swiper-grid-column > .swiper-wrapper {
  flex-wrap: wrap;
  flex-direction: column;
}

.swiper-fade.swiper-free-mode .swiper-slide {
  transition-timing-function: ease-out;
}

.swiper-fade .swiper-slide {
  pointer-events: none;
  transition-property: opacity;
}

.swiper-fade .swiper-slide .swiper-slide {
  pointer-events: none;
}

.swiper-fade .swiper-slide-active {
  pointer-events: auto;
}

.swiper-fade .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}

.swiper-cube {
  overflow: visible;
}

.swiper-cube .swiper-slide {
  pointer-events: none;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 1;
  visibility: hidden;
  transform-origin: 0 0;
  width: 100%;
  height: 100%;
}

.swiper-cube .swiper-slide .swiper-slide {
  pointer-events: none;
}

.swiper-cube.swiper-rtl .swiper-slide {
  transform-origin: 100% 0;
}

.swiper-cube .swiper-slide-active,
.swiper-cube .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}

.swiper-cube .swiper-slide-active,
.swiper-cube .swiper-slide-next,
.swiper-cube .swiper-slide-prev {
  pointer-events: auto;
  visibility: visible;
}

.swiper-cube .swiper-cube-shadow {
  position: absolute;
  left: 0;
  bottom: 0px;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  z-index: 0;
}

.swiper-cube .swiper-cube-shadow:before {
  content: "";
  background: #000;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  filter: blur(50px);
}

.swiper-cube .swiper-slide-next + .swiper-slide {
  pointer-events: auto;
  visibility: visible;
}

/* Cube slide shadows start */
.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-top,
.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-bottom,
.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-left,
.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-right {
  z-index: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

/* Cube slide shadows end */
.swiper-flip {
  overflow: visible;
}

.swiper-flip .swiper-slide {
  pointer-events: none;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 1;
}

.swiper-flip .swiper-slide .swiper-slide {
  pointer-events: none;
}

.swiper-flip .swiper-slide-active,
.swiper-flip .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}

/* Flip slide shadows start */
.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-top,
.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-bottom,
.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-left,
.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-right {
  z-index: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

/* Flip slide shadows end */
.swiper-creative .swiper-slide {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
  transition-property: transform, opacity, height;
}

.swiper-cards {
  overflow: visible;
}

.swiper-cards .swiper-slide {
  transform-origin: center bottom;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
}


.section__header {
  flex: 0 0 auto;
}

.section {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

.site-main {
  flex: 1 0 auto;
  padding-top: 73px;
  background: #fff;
  overflow: hidden;
}
@media only screen and (max-width: mdHeaderpx) {
  .site-main {
    padding-top: 55px;
  }
}
.site-main.site-main__over-visidle {
  overflow: visible;
}

.site-footer {
  flex: 0 0 auto;
}

.container {
  position: relative;
  box-sizing: border-box;
  width: 1343px;
  max-width: 95%;
  margin: 0 auto;
  position: relative;
}
@media only screen and (max-width: 1024px) {
  .container {
    width: 100%;
    max-width: calc(100% - 60px);
  }
}
@media only screen and (max-width: 767px) {
  .container {
    max-width: calc(100% - 40px);
  }
}
@media only screen and (max-width: 767px) {
  .container--padd-r-0 {
    max-width: 100%;
    margin-left: 20px;
  }
}

.button__circle {
  width: 130px;
  height: 130px;
  position: absolute;
  right: -18px;
  top: 5px;
  opacity: 1;
  will-change: transform, opacity;
  transform-style: preserve-3d;
  z-index: 900;
  cursor: pointer;
}
@media only screen and (max-width: 1920px) {
  .button__circle {
    width: 6.7708333333vw;
    height: 6.7708333333vw;
  }
}
@media only screen and (max-width: 767px) {
  .button__circle {
    width: 18.4615384615vw;
    height: 17.4358974359vw;
    right: -2.5641025641vw;
    top: 3.0769230769vw;
  }
}
.button__circle-inner {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  will-change: opacity;
  transform-style: preserve-3d;
}
.button__circle-outside {
  width: 100%;
  animation: rotateCircle 15s infinite linear;
}
@media only screen and (max-width: 1920px) {
  .button__circle-outside {
    width: 6.7708333333vw;
  }
}
@media only screen and (max-width: 767px) {
  .button__circle-outside {
    width: 18.4615384615vw;
  }
}
.button__circle-inside {
  position: absolute;
  top: 49%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 100%;
}
@media only screen and (max-width: 1920px) {
  .button__circle-inside {
    width: 6.7708333333vw;
  }
}
@media only screen and (max-width: 767px) {
  .button__circle-inside {
    width: 18.4615384615vw;
  }
}

.swiper-buttons {
  position: absolute;
  display: flex;
  height: 100px;
  width: 100%;
  top: calc(50% - 28px);
  overflow: visible;
}
.swiper-buttons .swiper-button-prev, .swiper-buttons .swiper-button-next {
  width: 28px;
  height: 56px;
  top: 0;
}
.swiper-buttons .swiper-button-prev::after, .swiper-buttons .swiper-button-next::after {
  font-size: 38px;
}
.swiper-buttons .swiper-button-prev::after {
  content: url(../img/svg/button-prev.svg);
}
.swiper-buttons .swiper-button-next::after {
  content: url(../img/svg/button-next.svg);
}

.btn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  min-height: 52px;
  min-width: 180px;
  background: #EF444A;
  color: #FFF !important;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 84.3%;
  transition: all 0.3s;
  cursor: pointer;
  width: fit-content;
  text-decoration: none !important;
}
.btn:hover {
  transition: all 0.3s;
  opacity: 0.7;
}

@keyframes rotationClose {
  0% {
    transform-origin: 50% 50%;
    transform: rotate(0deg);
  }
  100% {
    transform-origin: 50% 50%;
    transform: rotate(45deg);
  }
}
@keyframes rotationOpen {
  0% {
    transform-origin: 50% 50%;
    transform: rotate(45deg);
  }
  100% {
    transform-origin: 50% 50%;
    transform: rotate(0deg);
  }
}
.title__34 {
  color: #242E40;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: 107.3%; /* 36.482px */
  letter-spacing: 0.51px;
  text-transform: uppercase;
}
.title__34.text__white {
  color: #FFF;
}
.title__34 span {
  color: #EF444A;
}

.title__32 {
  color: #242E40;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 84.3%; /* 26.976px */
  letter-spacing: -0.8px;
}
.title__32.text__white {
  color: #FFF;
}
.title__32 span {
  color: #EF444A;
}

.title__30 {
  color: #242E40;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 84.3%; /* 25.29px */
  letter-spacing: 0.45px;
  text-transform: uppercase;
}
.title__30.text__white {
  color: #FFF;
}
.title__30 span {
  color: #EF444A;
}

.text__24 {
  color: #242E40;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 100.3%;
}
.text__24.text__white {
  color: #FFF;
}

.text__18 {
  color: #242E40;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 119.8%;
}
.text__18.text__white {
  color: #FFF;
}

.start-banner {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.start-banner__picture {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
}
.start-banner__picture::before {
  position: relative;
  content: "";
  width: 100%;
  padding-top: 43.15%;
}
@media only screen and (max-width: 1024px) {
  .start-banner__picture::before {
    padding-top: 75%;
  }
}
@media only screen and (max-width: 560px) {
  .start-banner__picture::before {
    padding-top: 100%;
  }
}
.start-banner__picture picture, .start-banner__picture img {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
}
.start-banner__desc {
  position: absolute;
  top: 61px;
  left: 0px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column;
}
@media only screen and (max-width: 767px) {
  .start-banner__desc {
    top: 30px;
  }
}
.start-banner__desc__title {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 700px;
  color: #FFF;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 84.3%; /* 60.405px */
  letter-spacing: 1.075px;
  text-transform: uppercase;
  margin-bottom: 104px;
}
@media only screen and (max-width: 767px) {
  .start-banner__desc__title {
    font-size: 52px;
    line-height: 95%;
    margin-bottom: 55px;
  }
}

.heat-loss {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
@media only screen and (max-width: 1024px) {
  .heat-loss {
    flex-flow: column nowrap;
  }
}
.heat-loss__col {
  position: relative;
  display: block;
  width: 50%;
}
@media only screen and (max-width: 1024px) {
  .heat-loss__col {
    width: 100%;
  }
}
.heat-loss__title {
  margin-bottom: 52px;
  max-width: 439px;
}
.heat-loss__direction {
  position: absolute;
  display: block;
  width: 768px;
  top: 235px;
  left: 53%;
}
@media (max-width: 1380px) {
  .heat-loss__direction {
    display: none;
  }
}
.heat-loss__direction img {
  position: relative;
  width: 100%;
  display: block;
}
.heat-loss__text {
  margin-bottom: 41px;
  max-width: 380px;
  margin-bottom: 35px;
}
.heat-loss__text:last-child {
  margin-bottom: 0;
}
.heat-loss__row {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 33px 45px;
}
@media only screen and (max-width: 1024px) {
  .heat-loss__row {
    width: 100%;
    padding: 30px 30px;
  }
}
@media only screen and (max-width: 767px) {
  .heat-loss__row {
    padding: 20px 20px;
  }
}
.heat-loss__row--black {
  background: #242E40;
}
.heat-loss__row--border {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  align-items: flex-start;
  justify-content: center;
}
.heat-loss__picture {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
}
@media only screen and (max-width: 1024px) {
  .heat-loss__picture::before {
    position: relative;
    content: "";
    width: 100%;
    padding-top: 75%;
  }
}
.heat-loss__picture picture, .heat-loss__picture img {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
}
@media only screen and (max-width: 1024px) {
  .heat-loss__picture picture, .heat-loss__picture img {
    position: absolute;
  }
}
.heat-loss__balloon {
  position: absolute;
  display: block;
  right: 0;
  top: -80px;
}
@media only screen and (max-width: 767px) {
  .heat-loss__balloon {
    position: relative;
    transform: rotate(-90deg);
    right: auto;
    top: 50px;
    width: auto;
    height: 250px;
    margin-left: 0px;
  }
}
@media only screen and (max-width: 767px) {
  .heat-loss__balloon--col .heat-loss__text {
    margin-bottom: 0;
  }
}
.heat-loss__advantages {
  position: relative;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: row nowrap;
}
@media only screen and (max-width: 767px) {
  .heat-loss__advantages {
    flex-flow: column nowrap;
  }
}
.heat-loss__advantage {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column nowrap;
  margin-right: 67px;
  margin-bottom: 37px;
}
@media only screen and (max-width: 767px) {
  .heat-loss__advantage {
    margin-right: 0;
  }
}
.heat-loss__advantage:last-child {
  margin-right: 0;
}
.heat-loss__advantage__icon {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 26px;
}
.heat-loss__advantage__title {
  margin-bottom: 17px;
}
.heat-loss__advantage__text {
  max-width: 248px;
}
@media only screen and (max-width: 767px) {
  .heat-loss__advantage__text {
    max-width: 100%;
  }
}
.heat-loss__absence {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
@media only screen and (max-width: 767px) {
  .heat-loss__absence {
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
  }
}
.heat-loss__absence__icon {
  margin-right: 41px;
}
@media only screen and (max-width: 767px) {
  .heat-loss__absence__icon {
    margin-right: 0;
    margin-bottom: 30px;
  }
}
.heat-loss__absence__text {
  max-width: 474px;
}
@media only screen and (max-width: 767px) {
  .heat-loss__absence__text {
    max-width: 100%;
  }
}
.heat-loss .application__title {
  margin-bottom: 21px;
}
.heat-loss .application__text {
  margin-bottom: 86px;
  max-width: 452px;
}

.advantages {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: row nowrap;
  width: 100%;
  padding: 0px 0px 67px 0px;
}
@media (max-width: 1280px) {
  .advantages {
    flex-flow: column nowrap;
  }
}
.advantages__section {
  width: 100%;
}
.advantages__title {
  margin-top: 43px;
  margin-bottom: 99px;
}
.advantages__col {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column nowrap;
}
.advantages__col:nth-child(1) {
  width: 76.91%;
}
@media (max-width: 1280px) {
  .advantages__col:nth-child(1) {
    width: 100%;
    margin-bottom: 80px;
  }
}
.advantages__col:nth-child(2) {
  width: 23.09%;
  align-items: flex-end;
}
@media (max-width: 1280px) {
  .advantages__col:nth-child(2) {
    width: 100%;
    align-items: center;
  }
}

.advantage {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 30px;
}
@media (max-width: 1280px) {
  .advantage {
    padding-left: 160px;
    flex-flow: column nowrap;
    margin-bottom: 60px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 30px;
  }
}
@media only screen and (max-width: 767px) {
  .advantage {
    padding-left: 0px;
  }
}
.advantage:last-child {
  margin-bottom: 0;
}
.advantage__col {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
@media (max-width: 1280px) {
  .advantage__col {
    flex-flow: column nowrap;
  }
}
@media (max-width: 1280px) {
  .advantage__col:first-child {
    margin-bottom: 30px;
  }
}
.advantage__value {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 368px;
  width: 368px;
  margin-right: 20px;
}
@media (max-width: 1280px) {
  .advantage__value {
    max-width: 100%;
    width: 100%;
  }
}
.advantage__value__title {
  display: inline-block;
  position: relative;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 8px;
  line-height: 119.3%;
}
.advantage__value__title--span {
  margin-bottom: 30px;
}
.advantage__value__title span {
  position: absolute;
  bottom: -32px;
  left: 35px;
  color: #242E40;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 119.3%; /* 71.58px */
  text-transform: uppercase;
}
@media (max-width: 1280px) {
  .advantage__value__title span {
    position: relative;
    bottom: auto;
    left: 20px;
  }
}
.advantage__arrow {
  margin-right: 45px;
  margin-top: 2px;
}
@media (max-width: 1280px) {
  .advantage__arrow {
    position: relative;
    display: none;
  }
}
.advantage__icon {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 55px;
  min-width: 108px;
  width: 108px;
}
@media (max-width: 1280px) {
  .advantage__icon {
    position: absolute;
    top: 0;
    left: -160px;
    margin-bottom: 30px;
  }
}
@media only screen and (max-width: 767px) {
  .advantage__icon {
    position: relative;
    top: auto;
    left: auto;
    margin-bottom: 30px;
  }
}
.advantage__icon img {
  display: block;
}

.all-season {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column nowrap;
}
.all-season__title {
  margin-bottom: 13px;
  text-transform: uppercase;
  font-weight: 700;
  width: 100%;
  text-align: right;
}

.questions {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-top: 54px;
}
.questions__section {
  background: #242E40;
}
.questions .accordions {
  position: relative;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column nowrap;
}
.questions .accordion {
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-bottom: 25px;
  display: block;
}
@media only screen and (max-width: 992px) {
  .questions .accordion {
    margin-bottom: 25px;
  }
}
.questions .accordion__intro {
  position: relative;
  cursor: pointer;
  color: #FFF;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 91.3%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 0;
  padding-top: 33px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}
.questions .accordion__intro p {
  position: relative;
  display: inline-block;
  width: 100%;
  color: #FFF;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 91.3%;
}
.questions .accordion__intro .accordion__intro__img {
  position: relative;
  width: 50px;
  min-width: 50px;
  height: 50px;
  min-height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media only screen and (max-width: 767px) {
  .questions .accordion__intro .accordion__intro__img {
    width: 51px;
    min-width: 51px;
    height: 51px;
    min-height: 51px;
  }
}
.questions .accordion__intro .accordion__intro__img svg {
  animation-name: rotationClose;
  animation-duration: 0.2s;
  animation-iteration-count: 1;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  width: 12px;
  min-width: 12px;
  height: 12px;
  min-height: 12px;
}
.questions .accordion__intro .accordion__intro__img:hover {
  background: #EF444A;
  color: #fff;
  transition: background 0.3s ease;
}
.questions .accordion__intro .accordion__intro__img:hover svg {
  fill: #fff;
}
.questions .accordion__intro .accordion__intro__img:hover svg path {
  fill: #fff;
}
.questions .accordion__content {
  max-height: 0;
  overflow: hidden;
  will-change: max-height;
  transition: all 0.25s ease-out;
  opacity: 0;
  padding-top: 0;
}
.questions .accordion__active .accordion__intro .accordion__intro__img svg {
  animation-name: rotationOpen;
  animation-duration: 0.2s;
  animation-iteration-count: 1;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}
.questions .accordion__active .accordion__content {
  opacity: 1;
  width: 100%;
  margin-top: 23px;
}
.questions .accordion__active .accordion__content p {
  padding: 0;
  margin: 0;
}

.videos {
  position: relative;
  display: flex;
  width: calc(100% + 40px);
  align-items: stretch;
  flex-flow: row wrap;
  margin-left: -40px;
}
.videos__wrap {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  max-width: 894px;
  margin-left: auto;
  margin-right: auto;
}
@media only screen and (max-width: 1024px) {
  .videos {
    width: calc(100% + 24px);
    margin-left: -24px;
    margin-bottom: 60px;
  }
}
@media only screen and (max-width: 767px) {
  .videos {
    width: calc(100% + 0px);
    margin-left: 0px;
    flex-flow: column nowrap;
    margin-bottom: 48px;
  }
}
.videos .video {
  position: relative;
  flex: 0 0 50%;
  max-width: calc(50% - 40px);
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 40px;
  margin-bottom: 40px;
  cursor: pointer;
}
@media only screen and (max-width: 1024px) {
  .videos .video {
    max-width: calc(50% - 24px);
    margin-left: 24px;
    padding: 24px;
  }
}
@media only screen and (max-width: 767px) {
  .videos .video {
    flex: 0 0 100%;
    max-width: calc(100% - 0px);
    margin-left: 0px;
    margin-bottom: 24px;
  }
  .videos .video:last-child {
    margin-bottom: 0;
  }
}
.videos .video::before {
  content: "";
  display: block;
  width: 100%;
  padding-top: 66.97%;
}
.videos .video:hover .video__play {
  transition: all 0.3;
  background: transparent;
  border: 1px solid #EF444A;
}
.videos .video:hover .video__play svg {
  fill: #EF444A;
}
.videos .video:hover .video__play svg path {
  fill: #EF444A;
}
.videos .video__preview {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  z-index: 5;
  border-radius: 10px;
}
.videos .video__preview img, .videos .video__preview picture {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.videos .video__play {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  z-index: 8;
  width: 73px;
  height: 73px;
  border-radius: 50px;
  background: #EF444A;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
@media only screen and (max-width: 767px) {
  .videos .video__play {
    width: 53px;
    height: 53px;
  }
}

.documents {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
}
.documents .document {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  text-decoration: underline;
  transition: all 0.3s;
  margin-bottom: 15px;
}
.documents .document svg {
  margin-right: 5px;
}
.documents .document:hover {
  transition: all 0.3s;
  text-decoration: none;
  color: #EF444A;
}

.text-block {
  position: relative;
  width: 100%;
  margin-bottom: 0px;
}
@media only screen and (max-width: 767px) {
  .text-block {
    margin-bottom: 0px;
  }
}
.text-block h1 {
  position: relative;
  display: block;
  color: #fff;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 135%;
  margin-bottom: 48px;
}
@media only screen and (max-width: 767px) {
  .text-block h1 {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 135%;
    margin-bottom: 24px;
  }
}
.text-block h2 {
  position: relative;
  display: block;
  color: #fff;
  font-size: 32px;
  font-style: normal;
  font-weight: 550;
  line-height: 135%;
  margin-bottom: 40px;
}
@media only screen and (max-width: 767px) {
  .text-block h2 {
    font-size: 18px;
    font-style: normal;
    font-weight: 550;
    line-height: 135%;
    margin-bottom: 24px;
  }
}
.text-block h3 {
  position: relative;
  display: block;
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  margin-bottom: 32px;
}
@media only screen and (max-width: 767px) {
  .text-block h3 {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    margin-bottom: 20px;
  }
}
.text-block p {
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
  margin-bottom: 16px;
}
.text-block p:last-child {
  margin-bottom: 0;
}
@media only screen and (max-width: 767px) {
  .text-block p {
    font-size: 14px;
    font-style: normal;
    line-height: 150%;
    margin-bottom: 12px;
  }
}
.text-block ul {
  position: relative;
  display: block;
  width: 100%;
  padding-left: 25px;
  padding-top: 0;
  margin-top: 0;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
  margin-bottom: 8px;
}
@media only screen and (max-width: 767px) {
  .text-block ul {
    font-size: 14px;
    font-style: normal;
    line-height: 150%;
    margin-bottom: 10px;
  }
}
.text-block ul li {
  position: relative;
  list-style-type: none;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
  margin-bottom: 8px;
}
@media only screen and (max-width: 767px) {
  .text-block ul li {
    font-size: 14px;
    font-style: normal;
    line-height: 150%;
    margin-bottom: 10px;
  }
}
.text-block ul li::before {
  content: "";
  display: block;
  height: 4px;
  width: 4px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  background-color: #fff;
  left: -15px;
  top: 13px;
  position: absolute;
}
.text-block a {
  cursor: pointer;
  color: #EF444A;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  text-decoration: underline;
  transition: all 0.3s;
}
.text-block a:hover {
  transition: all 0.3s;
  text-decoration: none;
}
.text-block table {
  width: 100%;
  table-layout: fixed;
  margin-bottom: 50px;
  overflow: hidden;
  border-spacing: 0;
}
.text-block table:last-child {
  margin-bottom: 0;
}
@media only screen and (max-width: 560px) {
  .text-block table {
    margin-bottom: 40px;
  }
}
.text-block table th, .text-block table td {
  word-wrap: break-word;
  padding: 19px 16px 19px 23px;
}
@media only screen and (max-width: 560px) {
  .text-block table th, .text-block table td {
    padding: 12px 18px;
  }
}
.text-block table th:first-child, .text-block table td:first-child {
  border-left: 1px solid #E3E3E3;
}
.text-block table th:last-child, .text-block table td:last-child {
  border-right: 1px solid #E3E3E3;
}
.text-block table th {
  background: #242E40;
  border-bottom: 1px solid #E3E3E3;
  border-right: 1px solid #E3E3E3;
  border-top: 1px solid #E3E3E3;
  color: #fff;
  font-size: 15px;
  font-style: normal;
  text-align: left;
  font-weight: 550;
  line-height: normal;
}
@media only screen and (max-width: 560px) {
  .text-block table th {
    font-size: 11px;
    font-style: normal;
    font-weight: 550;
    line-height: normal;
  }
}
.text-block table th:first-child {
  border-radius: 15px 0 0 0px;
}
.text-block table th:last-child {
  border-radius: 0 15px 0 0px;
}
.text-block table th + th + th {
  border-right: none;
}
.text-block table td {
  border-bottom: 1px solid #E3E3E3;
  border-right: 1px solid #E3E3E3;
  background: #fff;
  color: #454545;
}
@media only screen and (max-width: 560px) {
  .text-block table td {
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
.text-block table td:first-child {
  border-left: 1px solid #E3E3E3;
}
.text-block table td + td + td {
  border-right: none;
}
.text-block table tr:last-child td:first-child {
  border-radius: 0 0 0 15px;
}
.text-block table tr:last-child td:last-child {
  border-radius: 0 0 15px 0px;
}
.text-block table.tabel__two tr td {
  border-right: 1px solid #E3E3E3;
  vertical-align: top;
}
.text-block table.tabel__two tr th:first-child {
  width: 250px;
}
.text-block table.tabel__two th {
  background: #242E40;
  vertical-align: top;
}
.text-block table.tabel__two th:last-child {
  border-right: 1px solid #E3E3E3;
}
.text-block table.tabel__two th + th {
  background: #fff;
  color: #454545;
}
.text-block table.tabel__two td {
  background: #242E40;
}
.text-block table.tabel__two td + td {
  background: #fff;
  color: #454545;
}
.text-block__picture {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 440px;
  background: #242E40;
  border-radius: 15px;
  margin-bottom: 50px;
}
.text-block__picture:before {
  content: "";
  display: block;
  padding-top: 100%;
  position: relative;
}
.text-block__picture img, .text-block__picture picture {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  object-position: center center;
}

.fabrication {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  width: 100%;
}
.fabrication__swiper {
  position: relative;
  width: 100%;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-bottom: 32px;
}
@media (max-width: 1450px) {
  .fabrication__swiper {
    margin-bottom: 0;
  }
}
.fabrication .swiper-wrapper {
  flex-flow: row nowrap;
  align-items: stretch;
}
.fabrication__slide {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 35px;
  width: 427px;
  padding: 0px;
  height: auto;
  text-decoration: none;
  padding-bottom: 5px;
}
@media only screen and (max-width: 992px) {
  .fabrication__slide {
    width: 304px;
  }
}
.fabrication__slide__gallery {
  position: relative;
  width: 100%;
  display: block;
  overflow: hidden;
  margin-bottom: 13px;
}
.fabrication__slide__gallery:before {
  content: "";
  display: block;
  padding-top: 66.97%;
  position: relative;
}
.fabrication__slide__gallery img, .fabrication__slide__gallery picture {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center center;
  z-index: 1;
}
.fabrication__slide__gallery img:hover::after, .fabrication__slide__gallery picture:hover::after {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: block;
  width: 100%;
  height: 100%;
  content: "";
  background: rgba(27, 31, 34, 0.6);
  z-index: 5;
}
.fabrication__slide__date {
  position: relative;
  margin-bottom: 13px;
}
.fabrication__slide__title {
  max-width: 333px;
}
@media only screen and (max-width: 767px) {
  .fabrication__slide__title {
    max-width: 100%;
  }
}
.fabrication .swiper-buttons {
  height: 50px;
  top: 117px;
}
@media only screen and (max-width: 767px) {
  .fabrication .swiper-buttons {
    display: none;
  }
}
.fabrication .fabrication-prev, .fabrication .fabrication-next {
  background: #ECEEF1;
  width: 50px;
  height: 50px;
  min-width: 50px;
  min-height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fabrication .fabrication-prev::after, .fabrication .fabrication-next::after {
  display: block;
  position: relative;
  font-size: 0;
  line-height: 0;
}
.fabrication .fabrication-prev {
  left: 15px;
  top: 50%;
  right: auto;
}
.fabrication .fabrication-prev::after {
  content: url(../img/svg/button-prev--black.svg);
}
.fabrication .fabrication-next {
  right: 15px;
  top: 50%;
  left: auto;
}
.fabrication .fabrication-next::after {
  content: url(../img/svg/button-next--black.svg);
}
/*# sourceMappingURL=maps/main.css.map */


.main, .cms-page-view .std {
    padding: 0px;
}

.btn{
	border-radius:0 !important;
}

.heat-loss__row{
	width:auto;
}

.title__34.text__white, .text__24.text__white{
	z-index:1;
}