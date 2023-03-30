```mermaid
  erDiagram
    SubdirectoryLayout||--||RichText: has
    SubdirectoryLayout {
      string name PK
      string title
      richText content
    }
    RichText
```