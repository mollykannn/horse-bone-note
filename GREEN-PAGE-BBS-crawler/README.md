# GREEN-NERVE-BBS-crawler

(日本語はまだ勉強中なので、間違っていたらすみません🙇🏻‍♀️。)

<br/>

Webクローラーを使って、[GREEN-PAGE-BBS](http://susumuhirasawa.com/gn/bbs.cgi)のchaosunion投稿を取る。

今はNo.6592前の投稿を取らないので、このプログラムはNo.6593から取る。

結果を表示するWebページ: [GREEN-PAGE-BBS-crawler](https://mollykannn.github.io/horse-bone-note/GREEN-PAGE-BBS-crawler/index.html)

---

## プログラムの使い方

1. [Node.js](https://nodejs.org/ja/download/)をインストールする

2. コマンドプロンプトを起動する

3. コマンドをタイプする
  
    1. インストール 
    ```shell
    npm install
    ```

    2. 実行
    ```shell
    node list.js
    node content.js
    ```
    (実行結果は ```src/list.csv``` & ```src/___.md``` ファイルに記録される)

