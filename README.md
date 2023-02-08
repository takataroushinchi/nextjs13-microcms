## ShadcnUI

Radix UI と Tailwind CSS 製 プロジェクトに必要な構成を自前で実装する、ライブラリというより実装ドキュメントに近い。

コンポーネントライブラリではなく、コレクションとして提供

npm パッケージではないの（現時点では）で、閉じたプロジェクトとかに利用しやすいかも

**app ディレクトリ対応 UI ライブラリ、フレームワークに非依存**

[shadcn/ui](https://ui.shadcn.com/)

[shadcn/docs](https://ui.shadcn.com/docs)

コンポーネント毎に、Dark Mode スタイル

## RippleUI

Tailwind ベースのコンポーネントクラスライブラリ

[ripple](https://www.ripple-ui.com/)

[ripple/docs](https://www.ripple-ui.com/docs/get-started/installation)

Dark Mode アプリケーションのベーススタイル

## Icon

Lucide Powered by Vercel

[Lucide](https://lucide.dev/)

[lucide-react](https://github.com/lucide-icons/lucide/tree/main/packages/lucide-react#lucide-react)

## Deploy on Vercel

## UI テスト

`Storybook` を、 `Chromatic` にホスティングし UI カタログ、テスト環境とする

`ShadcnUI` で作成したコンポーネント( `/components` )を対象とする

### Storybook

storybook をインストールする前に、 `.eslintrc.json` を `.eslintrc` にリネームしておくと、storybook インストール時のマイグレーションと衝突するのを防げます。

`Storybook` インストール

```
$ npx sb init
```

```
$ npm run storybook
```

tsconfig.json にエラーが表示された場合、vscode を終了し、開いてください。
`Node.js v18` にアップグレードしたら `storybook` のビルドが通らない問題への対応

`npm script` に `NODE_OPTIONS=--openssl-legacy-provider` を付与してエラーを回避（暫定）

```
"scripts": {
  "storybook": "NODE_OPTIONS=--openssl-legacy-provider start-storybook -p 6006"
}
```

`.storybook/preview.js` を開き、 `tailwindcss` スクリプトで作成されたファイルをインポートします。

```
import('../public/tailwind.css')

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
```

Storybook ファイル作成
`./stories/AnotherButton.stories.tsx`

```
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AnotherButton } from './AnotherButton'

export default {
  title: 'tailwind/AnotherButton',
  component: AnotherButton,
  argTypes: {
    htmlFor: { control: "color" },
    className: { control: "color" },
  },
} as ComponentMeta<typeof AnotherButton>

const Template: ComponentStory<typeof AnotherButton> = (args) => (
  <AnotherButton {...args} />
)

export const Primary = Template.bind({});
Primary.args = {
  htmlFor: "exclude-done",
  className: "whitespace-nowrap",
};

export const Disabled = Template.bind({});
```

TailwindCSS 生成と、Storybook 実行のスクリプト

```
"scripts": {
    "watch:css": "npx tailwindcss -i ./styles/globals.css -o ./public/tailwind.css --watch",
    "watch:storybook": "NODE_OPTIONS=--openssl-legacy-provider start-storybook dev -p 6006",
    "storybook": "NODE_OPTIONS=--openssl-legacy-provider start-storybook -p 6006",
    "build-storybook": "NODE_OPTIONS=--openssl-legacy-provider build-storybook"
}
```

```
$ npm run watch:css
$ npm run watch:storybook
```

### Chomatic

[Chromatic](https://www.chromatic.com/)

Chromatic は、UI フィードバック、ビジュアルテスト、およびドキュメントの収集を自動化するため、手作業を減らしてより迅速に反復できます。
