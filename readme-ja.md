## Ionic Vue Mobile Template 03

![Netlify Status](https://api.netlify.com/api/v1/badges/2a4bd023-1a21-4dd0-89dd-9a2854b3d056/deploy-status)

vue-ionic ([最新版](https://ionicframework.com/blog/announcing-the-new-ionic-vue-beta/)) と ネイティブアプリにビルドするための Capacitor フレームワーク を使ったハイブリッドアプリのテンプレートです。 - これらのテンプレートは Instagram や Dribble のアプリデザインのインスピレーションページにあったものを実装しました。

[デモページ](https://ionic-vue-mobile-template-03.netlify.app)

<a href="https://www.buymeacoffee.com/simomafuxwana" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="120px" height="30px" style="height: 30px !important;width: 120px !important;" ></a>

## 環境を構築する
```
npm install
```

### 開発環境でブラウザ上で起動する
```
npm run serve
```

## デザイン
![alt text](/design.png "Logo Title Text 1")

## ネイティブアプリについて

ネイティブアプリをビルドするために [Capacitor](https://capacitorjs.com/docs/getting-started) を使用しました。

### ネイティブアプリにビルドするための準備

## iOS でのテスト、ディストリビューション
1. 最新版の Xcode をダウンロードしてください。
2. `npm run build`
3. `npx cap add ios`
3. `npx cap copy`
4. `npx cap open ios` Xcode がファイルのインデックスを作成するのに数分かかります。XCode の画面上部の進捗状況に注目してください。

[任意] 正常に動作するかを確認するために、画面上部の左側にある 実行ボタンをクリックしてください。もしシミュレーター上でアプリが起動します。 もし何も問題なければ、ログインしてクリックできるようになるはずです。そうでなければ、issue を作成してください🤷。確認します。

*アイコンとスプラッシュ画面* - Xcode (v11.5) では、config.xml 上のアイコンをマッピングできまないので、手動で行う必要があります😞。 ルートディレクトリ上で、Resources を探し、Images.xcassets を選択します。パネルが表示され、アイコンを追加する場合はアプリアイコンを、スプラッシュ画面を追加したい場合にLaunchImages を選択できます。

## Android でのテスト、ディストリビューション
1. 最新版の Android Studio をダウンロードします。
2. `npm run build`
3. `npx cap add android`
3. `npx cap copy`
4. `npx cap open android` Android Studio がファイルのインデックスの作成に数分かかります。画面下部の進捗状況に注目してください。

5. Testing -インデックス作成完了後、緑の実行ボタンを探してください。そのボタンをクリックすると、エミュレーター上、あるいは、もし USB 接続されているなら、スマホでアプリが起動します。([エミュレーターのセットアップはこちら](https://developer.android.com/studio/run/managing-avds))

## 公式ドキュメント
- [ブログ](https://ionicframework.com/blog/announcing-ionic-vue/)
- [Getting started](https://ionicframework.com/docs/vue/quickstart)
- [Changelog](https://github.com/ionic-team/ionic-framework/blob/master/CHANGELOG.md)

## クレジット
- [Valery Reck](https://dribbble.com/shots/11438470-Car-Leasing-App-Concept) - アプリデザインのインスピレーションページ
- [Tami Maiwashe](https://www.linkedin.com/in/tami-maiwashe-32824a19a/) - ドキュメント

## お問い合わせ
- [@dlodeprojuicer](https://twitter.com/dlodeprojuicer) on Twitter
