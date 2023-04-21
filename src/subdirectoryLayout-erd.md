```mermaid
  erDiagram
    SecondaryLandingPage||--||RichText: has
    SecondaryLandingPage {
      string name PK
      string title
      richText content
    }
    RichText
```