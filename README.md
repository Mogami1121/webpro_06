# webpro_06
'''mermaid
stateDiagram-v2
    [*] --> TopPage

    TopPage --> KeiyoList : 京葉線一覧へ
    TopPage --> AddForm : 駅追加フォームへ

    KeiyoList --> DetailPage : 詳細ページへ
    DetailPage --> KeiyoList : 戻る

    AddForm --> KeiyoList : 追加後一覧へ