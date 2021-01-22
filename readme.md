# EPM Bootstrap 4 Boilerplate

This includes all the front end components you should need to develop with.

## Getting Started

These instructions will assist you in compiling to the template if changes are required

### Prerequisites

What things you need to install the software and how to install them

```
Node
Powershell (windows) or terminal (OSX)
Text editor of choice
```


### Installing

Install the latest LTS version of Node for either Windows or OSX

```
visit https://nodejs.org/en/download/
```

Install node

```
Powershell or terminal will already be available
```

## Compiling

Clone down the repository

```
HTTPS https://github.com/rawww/epm-5g-bs4.git
```

CD in to the folder in powershell or terminal

```
run command 'npm install'
```

Once installed

```
run command 'gulp serve'
```

Browser sync should then be activated, any time you amend the JS or SASS this will refresh your browser with your changes

To compile changes

```
run command 'npm run prod'
```

## About javascript vendor file order

Adjust numerical value next to vendor files in /src/js/

```
/src/
-> /js/
-> -> 1.jquery.min.js
-> -> 2.jquery.ui.js
...
```

Add your additional javascript to

```
/js/index.js
```

## Directory structure

javascript vendor and main file in /src/js

sass in src/sass/style.scss

compiled files go to /docs/

## Built With

* [Bootstrap 4](https://getbootstrap.com/docs/4.6/getting-started/introduction/) - The responsive framework used
* [Bootstrap 4 Starter](https://bootstrapstarter.com/bootstrap-templates/template-basic-bootstrap-html/) - BS4 Boilerplate
* [Popper](https://popper.js.org/) - used for tooltips
* [Data tables](https://datatables.net/reference/index) - Framework used for dynamic tables
* [jQuery UI](https://jqueryui.com/draggable/) - Framework used for draggable elements
* [Swiper](https://swiperjs.com/api/) - Framework used for carousel elements

## Authors

Rawww
