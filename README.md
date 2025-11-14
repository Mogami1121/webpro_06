# webpro_06

```mermaid
flowchart TD
    A[メイン] --> B[予想]
    B --> A
    A --> C[舟券購入]
    C --> A
    B --> D[前日予想]
    D --> B
    B --> E[直前予想]
    E --> B
    C --> D
    C --> E