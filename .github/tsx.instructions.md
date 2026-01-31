---
applyTo: "**/*.tsx"
---

# React files

## Class names

When suggesting code, if there is a long className string, break it into multiple lines using semantic groups. For example, group layout-related classes together, spacing together, typography together, colors together, and transitions/animations together. Keep each line under 80 characters. Format JSX attributes so the opening tag, className, and other props are readable. Always produce clean multiline className strings in your suggestions

## Components

When suggesting code, if in the various pages there are pieces of code that are reused multiple times, follow the DRY principle and suggest to group everything in a unique component.

## Unused code

When suggesting code, if there is some code that is unused throughout the codebase, suggest to remove it entirely.
