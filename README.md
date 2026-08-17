# NeuroCare

NeuroCare is a bilingual English–Arabic neurology education library for patients
and families, authored by Dr Mohamed Ismaiel, Neurologist, Dubai.

The initial library covers:

- Stroke and transient ischaemic attack
- Migraine
- Epilepsy and seizures

Each guide follows the same six-part structure: understand, recognise, assess,
treat, live with it and questions to ask. Content includes dated review metadata,
patient-level source links and UAE emergency guidance.

## Clinical content workflow

Guide content lives in `src/content/conditions/` and is validated against the
typed schema in `src/content/schema.ts`. The build fails when a published guide
is missing a language, section, source or valid review date.

Mayo Clinic and Cleveland Clinic are used as patient-communication references.
Clinical recommendations are checked against current specialty guidance,
including AHA/ASA, NICE, ILAE, American Headache Society and WHO sources. Source
wording is paraphrased rather than copied.

Every substantive clinical edit should be reviewed by the named author before
release.

## Development

```sh
bun install
bun run check:content
bun run build
bun run dev
```

## Stack

- TanStack Start
- React and TypeScript
- Tailwind CSS
- Zod content validation
- GitHub Actions
