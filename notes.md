# Notes:

### CSS

BEM

- Block Element Modifier
- A naming convention or methodology used in CSS to create a modular and maintainable codebase.
- Helps to organize CSS classes by providing a clear and consistent structure for naming selectors.
- How to implement BEM:
  - **Block** which holds everything (elements) inside and acts as a scope.
    - Represents a standalone component or a high-level element on the page.
    - A self-contained unit that has meaningful purpose.
    - Block names are typically descriptive and unique, using lowercase and hyphen-separated words.
      - Example: .button, .card, .navbar
  - **Element** which acts as a specific part of the component.
    - Represents a part or an element of a block.
    - It is always scoped to its parent block.
    - Element names are written as a concatenation of the block name, a double underscore, and the element name, using lowercase and hyphen-separated words.
      - Example: .button\_\_text, .card\_\_title, .navbar\_\_item
  - **Modifier** which adds additional styles to a specific elements(s).
    - Used to modify the style or behavior of a block or an element.
    - It allows for variations or different states of a component.
    - Modifier names are written as a concatenation of the block or element name, a double dash, and the modifier name, using lowercase and hyphen-separated words.
      - Example: .button--primary, .card\_\_title--large, .navbar\_\_item--active
