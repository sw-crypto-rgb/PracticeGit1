# Playwright testing

End-to-end browser tests using [Playwright](https://playwright.dev/) for Chromium, Firefox, and WebKit.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended; CI uses the current LTS)

## Setup

```bash
npm ci
npx playwright install
```

On Linux CI or WSL you may need system dependencies:

```bash
npx playwright install --with-deps
```

## Running tests

```bash
npx playwright test
```

Useful options:

```bash
npx playwright test --ui              # interactive UI mode
npx playwright test --project=chromium # single browser
npx playwright test path/to/file.spec.ts
```

After a run, the HTML report is written to `playwright-report/` (see `reporter` in `playwright.config.ts`).

## Configuration

- **`playwright.config.ts`** — test directory (`tests/`), parallelism, retries on CI, reporters, screenshots, video on failure, and `data-test` as the test id attribute.

## Project layout

| Path | Purpose |
|------|---------|
| `tests/` | Active spec files |
| `archive/` | Older or practice specs |
| `.github/workflows/playwright.yml` | GitHub Actions: install, browsers, `npx playwright test`, upload report artifact |

## Continuous integration

Pushes and pull requests to `main` or `master` run the Playwright workflow. Failed or completed runs attach the `playwright-report` artifact for 30 days.
