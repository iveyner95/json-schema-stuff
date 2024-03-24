This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## TODOs

### Not Completed

- [ ] Display Array subschema as nodes
  - [ ] 'items'
  - [ ] 'prefixItems'
  - [ ] 'contains'
- [ ] Display logic based subschemas as nodes: https://json-schema.org/draft/2020-12/json-schema-core#name-keywords-for-applying-subsch
  - [ ] 'allOf'
    - [ ] Custom edge
  - [ ] 'anyOf'
    - [ ] Custom edge
  - [ ] 'oneOf'
    - [ ] Custom edge
  - [ ] 'not'
    - [ ] Custom edge
- [ ] Keyword Independence: https://json-schema.org/draft/2020-12/json-schema-core#name-keyword-independence-2
- [ ] Generate Positioning for Nodes
- [ ] Draggable nodes
- [ ] Generate edges for Nodes (from refs)
- [ ] Custom Node header
  - [ ] Icon for node by type (or root)
  - [ ] Title for node
  - [ ] Error icon for validation usage
- [ ] Custom Node Contents
  - [ ] Required
  - [ ] Conditions !?
  - [ ] Comments
- [ ] Custom Node Footer for Subschemas
  - [ ] Section for 'properties'
  - [ ] Section for 'patternProperties'
  - [ ] Section for 'additionalProperties'
  - [ ] Section for 'propertyNames'
- [ ] Display each subschema connection in its own UI / UX in node footer
- [ ] Top Navbar
- [ ] Display title of schema in the Navbar
- [ ] Draft system
- [ ] Download when there are changes
- [ ] Revert to original
- [ ] Moving edges edits the draft
  - [ ] Prevent connecting to root node
- [ ] Different UI for different subschemas
- [ ] Settings Modal
- [ ] Edit Title in settings
- [ ] Edit other properties in the settings
- [ ] Update Readme
- [ ] Test pattern properties (Reg exp)
- [ ] Monaco Editor for JSON editor
- [ ] Landing page / Upload
- [ ] Handle invalid Upload
- [ ] Plan support for different Schema types
- [ ] Type Generator to… what language?
- [ ] Test Schema
- [ ] Deploy To Vercel
- [ ] Analytics
- [ ] Explore vs-code extension
- [ ] Websocket connections into UI

### Completed

- [x] Github
- [x] Turn JSON Schema & object subschema into Nodes
