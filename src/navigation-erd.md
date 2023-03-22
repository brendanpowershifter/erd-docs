```mermaid
  erDiagram
  Page||--|{Page: "is Subpage of"
  Navigation||--|{Page: contains
  Navigation {
    string name PK
    page[] pages
  }
  Page {
    string name PK
    string slug
    bool isVisibleInNav
    pageTemplate template "This will be a reference to either a Directory, Sub-Directory, or Topic Page type"
  }
```
