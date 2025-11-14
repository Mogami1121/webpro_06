# webpro_06

```mermaid
flowchart TD
    A[トップページ] --> B[駅一覧ページ]
    B --> C[駅詳細ページ]
    B --> D[新規追加ページ]
    D --> B[追加して一覧へ戻る]
    C --> B[戻る]