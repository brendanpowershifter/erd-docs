%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#ff0000'}}}%%
```mermaid
erDiagram
 MetaSeo {
    string name PK
    string title
    asset image
    text description
  }

  Page {
    string name PK
    string slug
    bool isVisibleInNav
    pageTemplate template
  }

  PageLink {
    string name PK
    string title
    string url "Implemented to support linkng to external pages"
    page page
  }
```
