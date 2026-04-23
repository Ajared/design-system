# Typography Component

Typography system for the ajaRed design system providing consistent text styles across the application.

## Usage

```html
<!-- Import the CSS -->
<link rel="stylesheet" href="path/to/ajared.css">

<!-- Headings -->
<h1 class="ajr-h1">Main Heading</h1>
<h2 class="ajr-h2">Section Heading</h2>
<h3 class="ajr-h3">Subsection Heading</h3>

<!-- Display Text -->
<div class="ajr-display">Creative Display Text</div>

<!-- Body Text -->
<p class="ajr-body">Regular paragraph text</p>
<p class="ajr-body-lg">Larger body text for emphasis</p>
<p class="ajr-body-sm">Smaller body text</p>

<!-- Labels & Captions -->
<span class="ajr-label">Form Label</span>
<span class="ajr-caption">Supplementary caption</span>

<!-- Code -->
<code class="ajr-code">inline code</code>
<pre class="ajr-code-block">code block</pre>

<!-- Links -->
<a href="#" class="ajr-link">Link text</a>
```

## Variants

### Headings

| Class | Size | Weight | Use Case |
|-------|------|--------|----------|
| `.ajr-h1` | 64px | Bold | Page titles |
| `.ajr-h2` | 48px | Bold | Major sections |
| `.ajr-h3` | 36px | Semibold | Subsections |
| `.ajr-h4` | 32px | Semibold | Content headings |
| `.ajr-h5` | 24px | Semibold | Minor headings |
| `.ajr-h6` | 20px | Semibold | Small headings |

### Body Text

| Class | Size | Use Case |
|-------|------|----------|
| `.ajr-body-lg` | 18px | Emphasis text |
| `.ajr-body` | 16px | Default content |
| `.ajr-body-sm` | 12px | Secondary content |

### Utility Classes

#### Text Colors
- `.ajr-text--primary` - Primary text color (#323232)
- `.ajr-text--secondary` - Secondary text color (#626262)
- `.ajr-text--tertiary` - Tertiary text color (#939393)
- `.ajr-text--inverse` - White text for dark backgrounds
- `.ajr-text--brand` - Brand teal color
- `.ajr-text--accent` - Accent terracotta color

#### Font Weights
- `.ajr-text--normal` - 400
- `.ajr-text--medium` - 500
- `.ajr-text--semibold` - 600
- `.ajr-text--bold` - 700

#### Text Alignment
- `.ajr-text--left`
- `.ajr-text--center`
- `.ajr-text--right`

#### Line Heights
- `.ajr-text--tight` - 1.25
- `.ajr-text--normal-height` - 1.5
- `.ajr-text--relaxed` - 1.75
- `.ajr-text--loose` - 2.0

#### Other
- `.ajr-text--italic` - Italic text
- `.ajr-text--underline` - Underlined text
- `.ajr-text--truncate` - Truncate with ellipsis

## Accessibility

- All text meets WCAG 2.1 AA contrast requirements
- Semantic HTML elements used where appropriate
- Font sizes are relative and scalable

## Design Tokens Used

- Font families: `--font-primary`, `--font-secondary`, `--font-accent`, `--font-mono`
- Font sizes: `--font-size-xs` through `--font-size-5xl`
- Font weights: `--font-weight-normal` through `--font-weight-bold`
- Line heights: `--line-height-tight` through `--line-height-loose`
- Colors: All `--color-text-*` variables
