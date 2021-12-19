# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Project toolchain](#project-toolchain) -[Cross Browser Testing Report](#cross-browser-testing-report)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Links

- Live Site URL: [https://musing-archimedes-0fbb66.netlify.app/]()

## My process

First started with making whole project planning like deciding what tools to use(like npm, git, parcel etc), what kind of devices and browsers to support. I had to research for making cross browser compatibility strategy, red articles from MDN to set up complete tool chain.

After big picture questions are resolved started to develop the project. In this phase decided how to manage folders, assets.
Later decided How to structure the markup, wrote the mark.
Once mark up is ready for the page, did planning for how to style it( like what css features to use, and how to structure the wholes stylesheet)

Once one page of the project is made with html and styled or added js, I did necessary things like linting, prefixing, transpiling, building ,minification, cache busting, tree shaking.

Then with git and github, deployed the page to netlify.

Once it is on the web, tested the page for accessibility with tools like screen readers, online auditing tools, browser extensions.

After accessibility checking started to test it for cross browser compatibility, tested the page with browsers installed on my pc, on mobile devices on hand, and on browsers, real devices and stimulators from testingbot.com.

Continued this clycle of developing, deploying and testing till the end of the project.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JS DOM API

### What I learned

1. How to plan whole project, making cross browser compatiblity strategy, setting toolchain.
2. Cross browser testing.
3. Accessibility testing.
4. Js and CSS feature detecting.
5. Css features like: art direction for responsive images, backdrop-filter for bg blurring.

### Continued development

Responsive Desing, JS DOM Manipulation.

### Useful resources

- [https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools] - This helped me for getting guide to set complete toolchain for the project, and how to deploy it on the web. I really liked this pattern and will use it going forward.
- [https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing] - This series of articles from Mozilla Front End Course helped me to make a cross browser testing strategy, handling JS, Css, HTML and accessibility problems, feature detection, learning screen readers, task runners, auditing tools, cross browser compatibility.
- [https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#accessibility_testing_checklist]- a very useful checklist for carrying accessibility testing. Checked project for an accessibility leaning on instruction given in the checklist.
- [https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images]-this article helped me to learn things like resolution switching, art direction.
- [https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images]-this was usefil in understanding the importance of setting with and height to img, solving cumulative layout shoft problem in case of responsive design.
- [https://gs.statcounter.com/]-Based on data from this source I have made a cross browser compatibility support plan.
- [https://caniuse.com]-This service was useful in finding out features and technologies' cross browser compatibility.
- [https://developer.mozilla.org/en-US/docs/Web]-There I got competence information aboout html, css , js and their cross browser compatibility.

#### Cross Browser compatiblity support plan

A Grade: Chrome 95 94.0 93, Firefox 94 93 92 , Edge 95,94,93 for Windows,Safari for Mac 15,14 13. Android stock browser, Chrome for mobile 95, 94, Safari for Iphone/Ipad 15, 14, 13,

B Grade:
C Grade:UC browser, Samsung Internet, Opera Mini, Firefox for mobile, opera for tablets.

CBC support is carried out with dividing it to three grades. A grade being highest precedence. Grading is done by criterias like popularity of the browser, its version and devices. Cross Browser Compatibility testing should be carried out thouroughly in case of a grade and B grade. There is no need for testing for Browsers and devices mentioned in grade C. Its sufficient to make sure that basic functionality is available there.

### Project toolchain

1. Gulp task runner for automating testing tools :gulp-csslint for linting css, gulp-jshint,gulp-autoprefixer to scan our CSS and add vendor prefixes only where needed,gulp-babel to transpile any new JavaScript syntax features to traditional syntax that works in older browsers
2. parcel for minification,tree shaking and cache busting.
3. npm package manager.
4. git version control
5. validator.w3.org for html linting and formatting

### Accessibility Statement

1. HTML's sematically correctness is checked by validator.w3.org online tool.No errors

2. CSS is turned off to check if content makes sense without it. In Crew and technology pages Tab interactivity was not possible when css is turned off. it was due to empty link used as a tab.
   To solve this, link is given a text content and it is made invisible by css(by giving font-size and linie-height 0 value and color a transparent value).Basic functionality is available when CSS is turned off.

3. Tested for keyboard accessibility. Keyboard accessibility can be achieved with Tab, Enter, Shift+Tab keys. In case of Firefox Browsers, elements wasn't clearly visible when focused with tab.
   This was due to FF's weak focus effect. To tackle this, styled elements for focus state with :focus.

4. Site's color contrast is checked by webaim.org contrast checker tool.No major errors

5. Site is run by Wave auditing tool. No critical errors.

6. Site is tested with NVDA screen reader on Windows.No critical errors.

7. Site is tested with Android Voice assisstant.No critical errors.

8. ARIA is used at appropriate places for improving accessibility.

9. Site is run by Axe DevTools extension. It shown no serious or critical issues, except 6 moderate issues.

10. Web Page is tested in low network condition. Bg image fallback is working, browser font is apllied when google fonts wasn't available, images have text alternatives and there is no cumulative layout shift.

### Cross Browser Testing Report

#### Desktop Browser Testing:

##### Testing done for tests :

1. Background image presence and switching during window resizing.
2. Background color fallback in case of low network.
3. Logo image presence
4. Google fonts support
5. Navbar opacity presence and its fallback in case of no support.
6. Precence of appropriate styles in different states of elements like hover, focus and active.
7. Smooth switching of the tab and its images and content in the tab panel.
8. Tab has appropriate layout(in case of, crew, destination and technology pages).
9. Respponsiveness.
10. Keyboard accessibility

##### Browsers and versions testing performed on:

1. Chrome 95 installed on my PC, Chrome 94,93 from testingbot.com.
2. Firefox 94 installed on my PC, 93,92 from testingbot.com.
3. Edge 95,93 installed on my PC, 94 from testingbot.com
   Safari 15,14, 13

##### Results:

1. On Chrome and Edge (on all versions) result were succesfull. Everything is behaved as expected.

2. On Firefox backdrop-filter css property didn't work, it is not supported in ff browsers.
   For firefox, navbar bg color is changed and blur effect is not used.
   FF browsers targeted with @supports. Except this, everything is worked as expected.

3. On Safari, webkit-backdrop-filter is not behaving as expected. I could find out the reason for it. To tackle this same solution used as in FF cases.
   On safari 14 and 13, css gap property is not supported. This caused a bad layout problem where flexbox is used.I had to write feature detection Js code to detect safari browsers with above versions and make css gap property effect is substituted with margin.
   CSS height:auto not worked in Safari 14 and below version. Due to the bug(?) in the Safari 14 and below versions browser didn't calculate images
   aspect ratio properly and gave image a height mentioned in the html in all resoulitions. This caused the image get stretched in naroower windows. Simply,
   browser didn't use height:auto property in a proper way. To tackle this,I had to detect Safari 14 and below versions with JS feature detection code,
   and in main.js inside tab click handler function , in the switch case I have given appropriate class names to each image which can be
   used in css in giviving each image calculated height based on each images aspect ratio.

Except this everything behaved as expected.

#### Mobile/Tablet Browser Testing:

##### Testing done for tests-

In addition to browser specific tests:

1. hamburger menu function.
2. navigation menu function.
3. explore button and navbar links hover effect disability presence
4. hamburger menu funcionality correctness,navlink should appear on hamburger menu click ,
   and disappear on the next click(in case of mobile devices with the max width of 375px)

##### Devices and browsers:

1. Real devices on hand:
   Samsung A30: Firefox 94,Chrome 96,Samsung internet 15 ,Opera on Android 65
   Samsung J2 2016:Samsung internet 15,Chrome 95,Firefox. 94,Opera on Android 65
   Samsung J 260F: Chrome 96.
   Surface Pro4 tablet mode :Chrome 95, Edge 95, Firefox 95.

2. Devices and simulators from testingbot.com:
   Iphone XR version 12.01, iphone 11 safari 14.0, iphone 11 pro safari 14.0,
   iphone 8 safari 14, Galaxy s8 chrome 88, firefox 88,iphone 8 plus safari on 14
   Pixel 3 10.0 Chrome 74, Pixel C 8.0 Chrome 78,
   Samsung Galaxy S8 :Chrome 88, Firefox 88

##### Results:

On all real devices on hand all tasted succeeded.
On Device simulators, on iPhones, iPads with Safari 14, and on other devices with Chrome below 80,
css gap property didn't worked as it was not supported. This problem is fixed with feature detecting JS code and substituting gap effect with css margin.

## Author

Ruslanbek Normurodov

- Frontend Mentor - [@ruslanbek92](https://www.frontendmentor.io/profile/ruslanbek92)
- LinkedIn - [Ruslanbek Normurodov](https://www.linkedin.com/in/ruslanbek-normurodov-ab01a1164/)
