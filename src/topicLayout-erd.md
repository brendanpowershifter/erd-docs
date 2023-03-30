```mermaid
  erDiagram
    TopicLayout||--||RichText: has
    TopicLayout {
      string name PK
      string title
      richText content
    }
    RichText
```