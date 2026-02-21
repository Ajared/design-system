# Button Component

Interactive button component with multiple variants, sizes, and states.

## Usage

```html
<!-- Basic Button -->
<button class="ajr-button ajr-button--primary ajr-button--md">
  Click me
</button>

<!-- Button with Icon -->
<button class="ajr-button ajr-button--primary ajr-button--md">
  <span>⭐</span>
  <span>Star</span>
</button>

<!-- Icon Only Button -->
<button class="ajr-button ajr-button--primary ajr-button--icon ajr-button--md">
  ⭐
</button>

<!-- Loading Button -->
<button class="ajr-button ajr-button--primary ajr-button--md ajr-button--loading">
  Loading...
</button>

<!-- As Link -->
<a href="#" class="ajr-button ajr-button--primary ajr-button--md">
  Link Button
</a>
```

## Variants

| Class | Description | Use Case |
|-------|-------------|----------|
| `.ajr-button--primary` | Brand teal background | Main actions, CTAs |
| `.ajr-button--secondary` | Terracotta background | Secondary actions |
| `.ajr-button--tertiary` | Outlined, transparent | Tertiary actions |
| `.ajr-button--ghost` | Text only, no border | Minimal emphasis |
| `.ajr-button--danger` | Red background | Destructive actions |
| `.ajr-button--success` | Green background | Positive confirmations |

## Sizes

| Class | Height | Padding | Font Size |
|-------|--------|---------|-----------|
| `.ajr-button--sm` | 32px | 8px 16px | 12px |
| `.ajr-button--md` | 40px | 12px 24px | 16px (default) |
| `.ajr-button--lg` | 48px | 16px 32px | 18px |

## States

### Disabled
```html
<button class="ajr-button ajr-button--primary ajr-button--md" disabled>
  Disabled
</button>
```

### Loading
```html
<button class="ajr-button ajr-button--primary ajr-button--md ajr-button--loading">
  Loading...
</button>
```

## Modifiers

### Full Width
```html
<button class="ajr-button ajr-button--primary ajr-button--md ajr-button--full">
  Full Width
</button>
```

### Rounded
```html
<button class="ajr-button ajr-button--primary ajr-button--md ajr-button--rounded">
  Rounded
</button>
```

### Icon Only
```html
<button class="ajr-button ajr-button--primary ajr-button--icon ajr-button--md">
  ⭐
</button>
```

## Button Groups

### Separated
```html
<div class="ajr-button-group">
  <button class="ajr-button ajr-button--tertiary ajr-button--md">One</button>
  <button class="ajr-button ajr-button--tertiary ajr-button--md">Two</button>
  <button class="ajr-button ajr-button--tertiary ajr-button--md">Three</button>
</div>
```

### Attached
```html
<div class="ajr-button-group ajr-button-group--attached">
  <button class="ajr-button ajr-button--primary ajr-button--md">One</button>
  <button class="ajr-button ajr-button--primary ajr-button--md">Two</button>
  <button class="ajr-button ajr-button--primary ajr-button--md">Three</button>
</div>
```

## Accessibility

- Supports keyboard navigation (Tab, Enter, Space)
- Focus indicator with 2px outline
- Disabled state prevents interaction
- Proper ARIA attributes recommended for icon-only buttons:
  ```html
  <button class="ajr-button ajr-button--primary ajr-button--icon" aria-label="Favorite">
    ⭐
  </button>
  ```

## Design Tokens Used

- Colors: `--color-primary`, `--color-accent-terracotta`, `--color-semantic-*`
- Spacing: `--space-2` through `--space-8`
- Border radius: `--radius-md`, `--radius-full`
- Font: `--font-primary`, `--font-weight-semibold`
- Transitions: `--transition-fast`
