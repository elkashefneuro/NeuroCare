# NeuroCare

NeuroCare is a bilingual (English/Arabic) neurology patient-education library by
Dr Mohamed Ismaiel, Neurologist, Dubai.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Configuration

| Variable        | Required | Purpose                                                                                                           |
| --------------- | -------- | ----------------------------------------------------------------------------------------------------------------- |
| `VITE_SITE_URL` | No       | Canonical origin of the deployment, e.g. `https://neurocare.example` (no trailing slash). Read at **build** time. |

With `VITE_SITE_URL` set, the build emits absolute `rel="canonical"`, `hreflang`
and `og:url` values, writes `/sitemap.xml`, and appends a `Sitemap:` directive to
`robots.txt`. Without it the build still succeeds: canonical and `hreflang` stay
root-relative (crawlers resolve those against the requesting origin), `og:url` is
omitted rather than emitted in an unresolvable relative form, and no sitemap is
written. Copy `.env.example` to `.env` to set it locally.

## Checks

```sh
bun run lint         # eslint + prettier
bun run typecheck    # tsc --noEmit
bun run check:content # clinical content publish gate
bun run build
```

`check:content` is the publish gate for clinical content: a guide marked
`published` must carry all six sections in both languages, cite at least one
source, and sit inside its review window. The same gate runs as a Vite plugin, so
a failing guide stops the build rather than reaching patients. It deliberately
does **not** run at request time — see `src/content/conditions.ts`.
