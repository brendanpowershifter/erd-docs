```mermaid
  erDiagram
    BasicContentPage||--||RichText: has
    BasicContentPage {
      string name PK
      string title
      richText content
    }
    RichText
```