# Star Rating:

## Requirements:

### Must have features:
1. Stars limit for rating - 5
2. Behaviour:
    - On star click - Rating value (1 to 5) should be displayed and all the stars till selected should be toggled.
    - On hovering on star - Stars should be highlighted upto the last hovered star.

### Good to have features:
1. Partial star rating - Like 4.5 stars.
2. Add emoji - Show emoji as per rating given.

### Approach:
- Events to handle :
    - click - Update the rating value and respective selected stars toggle.
    - mouseover - Highlight stars upto the last hovered star.
    - mouseleave - Stars selected should return back to previous selected rating.

### Concepts Used:
- JS - Event Bubling | Event Listeners | DOM Manipulations

### Utilities:
- Star Symbol Code - &#128970 - 🟊

### Solution Links:
- Codepen Link - [https://codepen.io/dsantoshkumarit/pen/bGPgjzZ](https://codepen.io/dsantoshkumarit/pen/bGPgjzZ).