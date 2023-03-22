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
```
