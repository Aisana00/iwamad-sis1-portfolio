# iwamad-sis1-portfolio

**Live site:** https://aisana00.github.io/iwamad-sis1-portfolio/

## About the site
This is my personal portfolio website built with plain HTML5, CSS3 and vanilla JavaScript.
It shows who I am, the projects I built during the IWaMAD course, and a contact form.
The site works on both phone and desktop and has a dark and light theme.

## Design decisions
1. **Layout.** On desktop the projects are in a two-column grid and the photo sits next to the text. On a phone everything becomes one column, the photo moves above the text and the menu collapses into a burger button, because three links in a row did not fit at 375 px.
2. **Colours.** I chose purple as the single accent colour on a neutral background so links and buttons are easy to find. All colours are CSS variables, so the dark theme only swaps the variables and the page stays consistent.
3. **After testing on a phone.** I made the buttons at least 44 px high so they are easy to tap, reduced the heading size, and added a clear yellow focus outline after checking keyboard navigation.