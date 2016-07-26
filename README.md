# Unicode-loader

Unicode loader for webpack.
Convert all the string in javascript file into unicode.

# Install
`npm install unicode-loader --save-dev`


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

### Before webpack
var mNames = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月', ''];
### After webpack
var mNames = ['\u4e00\u6708', '\u4e8c\u6708', '\u4e09\u6708', '\u56db\u6708', '\u4e94\u6708', '\u516d\u6708', '\u4e03\u6708', '\u516b\u6708', '\u4e5d\u6708', '\u5341\u6708', '\u5341\u4e00\u6708', '\u5341\u4e8c\u6708', ''];

# Developer
* Ben Yin ( yinhaibo21@gmail.com )