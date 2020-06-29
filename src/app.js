import './scss/app.scss';

import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(CSSRulePlugin, ScrollToPlugin, ScrollTrigger);

const projects = document.querySelector('.projects');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact');

projects.addEventListener('click', () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: '#projects', offsetY: 100 },
  });
});
about.addEventListener('click', () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: '#about' },
  });
});
contact.addEventListener('click', () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: '#contact', offsetY: 100 },
  });
});
