# Input Component

Form input components including text inputs, textarea, select, checkbox, and radio buttons.

## Usage

### Text Input
```html
<div class="ajr-input-group">
  <label class="ajr-label">Email</label>
  <input type="email" class="ajr-input ajr-input--md" placeholder="Enter your email">
  <span class="ajr-helper-text">We'll never share your email</span>
</div>
```

### Textarea
```html
<div class="ajr-input-group">
  <label class="ajr-label">Message</label>
  <textarea class="ajr-textarea" placeholder="Enter your message"></textarea>
</div>
```

### Select
```html
<div class="ajr-input-group">
  <label class="ajr-label">Country</label>
  <select class="ajr-select ajr-select--md">
    <option>United States</option>
    <option>Canada</option>
    <option>Mexico</option>
  </select>
</div>
```

### Checkbox
```html
<label class="ajr-checkbox">
  <input type="checkbox">
  <span class="ajr-checkbox-mark"></span>
  <span>I agree to the terms</span>
</label>
```

### Radio
```html
<label class="ajr-radio">
  <input type="radio" name="plan">
  <span class="ajr-radio-mark"></span>
  <span>Basic Plan</span>
</label>
```

## States

- Default
- Focus
- Hover
- Disabled
- Error (`.ajr-input--error`)
- Success (`.ajr-input--success`)

## Sizes

- Small (`.ajr-input--sm`)
- Medium (`.ajr-input--md`) - Default
- Large (`.ajr-input--lg`)
