# 19 Progressive Web Applications (PWA): Text Editor
## Table of contents
- Overview
    - The Challenge
    - Screenshot
    - Links
- My Approach
    - Code construction
    - Learnings
- Author
## Overview

## The Challenge

GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
## Screenshot
![display the page](./Assets/Capture.PNG)

### Links
Github URL:  https://github.com/amalahema/


### Code Construction
- install webpack,service worker and Babel
- install --save-dev webpack
- initDb, putDb and getDb

### Learnings
- how to add Html webpack plugin in webpack config file.
- how to generate serivice worker by InjectManifest.
- how to provide configuration details in webpackPwaManifest
- how to add css loaders in webpack
- how to check IndexedDb
- how to get and put content using objectStore

