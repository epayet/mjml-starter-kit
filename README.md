# MJML starter kit

This is a stater-kit for [MJML](https://mjml.io/).

## Features

* Easy MJML files compilation (`npm run build` to compile every templates)
* Easy dev mode with browser reloading and watch, even with custom components (`npm start`)
* Contains the examples of the [documentation](https://mjml.io/documentation)

## Usage

### Installation

`npm install`

### Build templates to HTML

`npm run build`

This will create the HTML files in the `dist` folder. Reading from templates folder.

### Dev mode

`npm start`

This will start a development server with a watch task and browser reloading.

### Create your own component

`npm run init-component mycomponent`

This will create a js file in the root folder. You need to move it to the `components` folder and add it to the 
`components/index.js` file. Then you will be able to use it in your templates as `<mj-mycomponent/>`.

## Folder structure

```
.
├── components      -> Custom components
├── dist            -> Build folder with final HTML files
└── templates       -> MJML files
```

## Contribute

Pull requests and suggestions are welcome! 

## License

The MIT License (MIT)

Copyright (c) 2016 Emmanuel Payet

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.