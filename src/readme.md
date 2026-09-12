# React Props — 3 Ways to Pass Data

When mapping over an array of objects, there are 3 common ways to pass the data to a component.

---

## Example Data

Suppose we have:

```js
const entry = {
  id: 1,
  img: {
    src: "japan.jpg",
    alt: "Mount Fuji"
  },
  title: "Mount Fuji",
  country: "Japan",
  googleMapsLink: "https://maps.google.com",
  date: "12 Jan, 2025",
  text: "A beautiful place to visit."
}
```

---

# 1. Pass the Whole Object

### Parent

```jsx
<Entry
  key={entry.id}
  entry={entry}
/>
```

Here, `entry` becomes **one prop**.

### Child

```jsx
export default function Entry(props) {
  return (
    <h1>{props.entry.title}</h1>
  );
}
```

You need:

```text
props
  └── entry
       └── title
```

So:

```jsx
props.entry.title
```

### Think:

> "I'm giving the entire `entry` object to Entry."

---

# 2. Pass Each Property Individually

### Parent

```jsx
<Entry
  key={entry.id}
  img={entry.img}
  title={entry.title}
  country={entry.country}
  googleMapsLink={entry.googleMapsLink}
  date={entry.date}
  text={entry.text}
/>
```

Now each value becomes a **separate prop**.

### Child

```jsx
export default function Entry(props) {
  return (
    <h1>{props.title}</h1>
  );
}
```

You use:

```jsx
props.title
props.country
props.img
props.date
```

NOT:

```jsx
props.entry.title
```

because there is no `entry` prop.

### Think:

> "I'm taking the object apart and sending each value separately."

---

# 3. Spread Operator

### Parent

```jsx
<Entry
  key={entry.id}
  {...entry}
/>
```

The spread operator takes all the properties from `entry` and passes them as **individual props**.

This:

```jsx
<Entry {...entry} />
```

is basically the same as:

```jsx
<Entry
  id={entry.id}
  img={entry.img}
  title={entry.title}
  country={entry.country}
  googleMapsLink={entry.googleMapsLink}
  date={entry.date}
  text={entry.text}
/>
```

### Child

```jsx
export default function Entry(props) {
  return (
    <h1>{props.title}</h1>
  );
}
```

Again:

```jsx
props.title
props.country
props.img
props.date
```

NOT:

```jsx
props.entry.title
```

### Think:

> "Take everything inside this object and spread it out as separate props."

---

# 🔥 Main Difference

| Method           | Parent                | Child               |
| ---------------- | --------------------- | ------------------- |
| Whole object     | `entry={entry}`       | `props.entry.title` |
| Individual props | `title={entry.title}` | `props.title`       |
| Spread           | `{...entry}`          | `props.title`       |

---

# Visual Difference

## Whole Object

```text
<Entry entry={entry} />

props
└── entry
    ├── id
    ├── img
    ├── title
    ├── country
    └── text
```

Access:

```jsx
props.entry.title
```

---

## Individual Props

```text
<Entry title={entry.title} country={entry.country} />

props
├── title
├── country
└── ...
```

Access:

```jsx
props.title
```

---

## Spread Operator

```text
<Entry {...entry} />

props
├── id
├── img
├── title
├── country
└── text
```

Access:

```jsx
props.title
```

---

# ⭐ Important: `key`

You will often see:

```jsx
<Entry
  key={entry.id}
  {...entry}
/>
```

`key` is special in React.

React uses it to identify each item when rendering a list.

```jsx
key={entry.id}
```

is **not the same as a normal prop**.

So don't expect:

```jsx
props.key
```

to give you the key.

If you need the ID inside `Entry`, pass it separately:

```jsx
<Entry
  key={entry.id}
  id={entry.id}
  {...entry}
/>
```

Although in this particular case, `{...entry}` already contains `id`, so you normally don't need to pass it twice.

---

# 🧠 Easy Way to Remember

### `entry={entry}`

**One box**

```text
props → entry → title
```

Therefore:

```jsx
props.entry.title
```

---

### `title={entry.title}`

**Individual value**

```text
props → title
```

Therefore:

```jsx
props.title
```

---

### `{...entry}`

**Unpack/spread the box**

```text
entry → title
      → country
      → img
      → text
```

Therefore:

```jsx
props.title
props.country
props.img
```

---

# Which One Should I Use?

All three are valid.

### Use `entry={entry}` when:

You want to keep the object grouped together.

```jsx
<Entry entry={entry} />
```

Good when the component works with the whole object.

---

### Use individual props when:

The component only needs a few specific values.

```jsx
<Entry
  title={entry.title}
  country={entry.country}
/>
```

Very explicit and easy to see what the component needs.

---

### Use `{...entry}` when:

The object already contains exactly the props your component expects.

```jsx
<Entry {...entry} />
```

This is convenient when there are many properties.

---

# Final Cheat Sheet

```jsx
// 1️⃣ Whole object
<Entry entry={entry} />

// Child:
props.entry.title
```

```jsx
// 2️⃣ Individual props
<Entry title={entry.title} />

// Child:
props.title
```

```jsx
// 3️⃣ Spread
<Entry {...entry} />

// Child:
props.title
```

### One-line memory trick:

> **`entry={entry}` = keep together**
> **`title={entry.title}` = pick individually**
> **`{...entry}` = spread everything out**
