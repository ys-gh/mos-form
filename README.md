# mos-form
研究で使う音声主観評価実験の為のフォーム

## 1. 環境構築
``` 
$ docker compose up --build
```

## 2. 前準備
### 2-1. Firebase
- [Firebase](https://firebase.google.com/)でプロジェクトを作成
- [Cloud Firestore](https://firebase.google.com/products/firestore)を有効化
- APIキー等を取得

### 2-2. 環境変数
```
$ cp env.sample .env.local
```
`.env.local`に2-1で取得したAPIキー等を配置する

### 2-3. 音声フォルダの配置

下のような構造の`wavs`を`src/asstes`に配置する(`wavs`の下に手法毎の音声が入ったフォルダを配置)
```
wavs
├── baseline
│   ├──.wav
│   ├──.wav
│   └── ...
├── proposed1
│   ├── .wav
│   ├── .wav
│   └── ...
└── ...
    ├── .wav
    ├── .wav
    └── ...

```
### 2-4. jsonファイルの作成
```
$ python main.py
```
`src/asstes/`にjsonファイルが作成される

## 3. ビルド・外部公開
```
$ firebase init
$ npm run build 
$ firebase deploy
```

## 4. 結果の集計
[mos-form-analyze](https://github.com/ys-gh/mos-form-analyze)
