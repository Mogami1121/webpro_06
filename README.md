# webpro_06

```mermaid
flowchart TD
    A[トップページ] --> B[選手一覧ページ]
    B --> C[前日予想，直前予想ページ]
    B --> D[舟券購入ページ]
    D --> B[購入して一覧へ戻る]
    C --> B[戻る]