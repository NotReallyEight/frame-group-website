# Contribution

Before submitting a pull request, please be sure to follow these contribution guidelines.

## General

### Semantic versioning

The `package.json` file must always follow npm semantic versioning. When creating a PR it should update the version according to the type of change.

### Unused dependencies

If in the `package.json` there are some installed packages that are unused, remove them.

## React files

### Class names

If there is a long `className` string, break it into multiple lines using semantic groups. For example, group layout-related classes together, spacing together, typography together, colours together, and transitions / animations together. Keep each line under $80$ characters. Format JSX attributes so the opening tag, `className`, and other props are readable. Always produce clean multiline `className` strings.

#### Example

```jsx
// Before
<div className="absolute inset-0 flex h-dvh w-dvw items-center justify-center bg-black transition-opacity duration-500 hover:bg-gray-900 text-white font-bold">

// After
<div
  className="
    absolute inset-0
    flex h-dvh w-dvw
    items-center justify-center
    bg-black hover:bg-gray-900
    text-white font-bold
    transition-opacity duration-500
  "
>
```

### Components

If in the various pages there are pieces of code that are reused multiple times, follow the DRY principle and group everything in a unique component.

### Unused code

If there is some code that is unused throughout the codebase, remove it directly.
