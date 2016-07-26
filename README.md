# Unicode-loader

Unicode loader for webpack.
Convert all the string in javascript file into unicode.

# Install
### project
`npm install unicode-loader --save-dev`
### global
`npm install unicode-loader -g`

# Example
```json
{
    loaders: [{
        // convert code to unicode
        test: /\.js?$/,
        loader: "unicode-loader"
    }]
}
```

# Developer
* Ben Yin ( yinhaibo21@gmail.com )