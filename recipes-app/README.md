# Recipes app

## import

```js
// Bad
import {React} from 'react';

// Good
import React from 'react';
```

括弧で囲って`import`するのは、名前付きで`export`されたオブジェクトを使う場合。`React`を`import`するなら括弧なしで。webpackでビルドする際にも警告が表示されるので気付けるようになりたい。

## デストラクチャ

```js
function Ingredient({amount, measurement, name})
```

中括弧`{}`で囲ったオブジェクトによって、引数で渡ってきたオブジェクトを分解して部分的に取り出して使うことができる。
