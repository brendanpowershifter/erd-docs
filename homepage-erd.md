```mermaid
erDiagram
  Homepage {
      string name PK
      reference meta
      homepageHero hero
      homepageHeadlights headlightCards
  }
  Homepage}|--||MetaSeo: references
  Homepage}|--||HomepageHero: references
  Homepage}|--||HomepageHeadlights: references
  HomepageHero}|--|{VerticalCard: references
  VerticalCard}|--|{PageLink: references
  HomepageHeadlights}|--|{HeadlightCard: references
  MetaSeo {
    string name PK
    string title
    asset image
    text description
    other fields
  }
  HomepageHero {
    string name PK
    string header
    asset image
    pageLink cta
    verticalCard[] cards FK
  }
  HomepageHeadlights {
    string name PK
    string heading
    headlightCard[] cards
  }
  VerticalCard {
    string name PK
    asset icon
    string title
    string Boundary
    pageLink[] links
    pageLink buttonLink
  }
  PageLink {
    string label PK
    reference path "This is a page reference but is not represented here for brevity"
  }
  HeadlightCard {
    string name PK
    asset image
    string body
    reference page "This is a page reference but is not represented here for brevity"
  }
```
