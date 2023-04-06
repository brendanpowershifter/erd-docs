```mermaid
  erDiagram
  Page||--|{Page: "is Subpage of"
  Navigation||--|{Page: contains
  Page||--||MetaSeo: references
  Page||--o|HomepageLayout: references
  Page||--o|DirectoryLayout: references
  Page||--o|SubdirectoryLayout: references
  Page||--o|TopicLayout: references
  Navigation {
    string name PK
    reference alertBanner
    page[] pages
  }
  Page {
    string name PK
    string title
    string slug
    bool isVisibleInNav
    reference template
    metaSeo meta
  }
  MetaSeo {
    string name PK
    string title
    asset image
    text description
  }
  HomepageLayout
  DirectoryLayout
  SubdirectoryLayout
  TopicLayout
  MetaSeo {
    string name PK
    string title
    asset image
    text description
  }

```
