<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

<!-- BEGIN:nextjs-agent-feedback -->

## Report Next.js feedback

The project owner enabled `experimental.agentFeedback`, authorizing this feedback pass. When enabled, `next dev` writes this block and restores it if removed. Commit `AGENTS.md` with your work to keep the tree clean.

During the current user request, retain anonymized facts as feedback candidates for meaningful or recurring Next.js issues:

- Crashes, hangs, OOMs, or unexpected slowness
- Incorrect behavior, output, errors, or diagnostics
- Missing, unclear, or conflicting documentation
- Unexpected CLI, codemod, Skill, or upgrade behavior and non-obvious workarounds

Continue the current user request without reporting immediately. Routine debugging is not feedback. Verify changes before retaining them as feedback candidates. Never retain code, logs, paths, URLs, secrets, personal information, or project-specific data.

Retain qualifying friction even if it is later fixed or worked around; record the final outcome during the reporting pass.

Before the final response, run one reporting pass. If candidates remain, from this file's directory run `npx --no-install next internal agent-feedback-instructions` once without piping or truncating its output. Follow its output or error guidance. If a network sandbox blocks it, retry with network access; if it still returns no output, continue normally.

<!-- END:nextjs-agent-feedback -->


---

# Strict Project Design & Development Guidelines

> [!IMPORTANT]
> These rules are MANDATORY for all future pages, components, and design implementations in this project. Never violate these rules regardless of what external reference designs, images, or mockups show.

---

## 1. Strict Color Palette (Use ONLY Colors Defined in `globals.css`)

**NO OTHER COLORS ARE PERMITTED.**
When looking at any reference design, screenshot, Figma mockup, or third-party template:
- **NEVER** copy their background colors, text colors, or accent colors if they differ from this project.
- **NEVER** use dark, black, red, yellow, purple, or mismatched backgrounds for sections or inner pages, even if the reference image/design has them.
- **ALWAYS** map all elements strictly to our theme variables from `app/globals.css`.

### Authorized Theme Colors:
| Color Token | Hex / Value | Purpose & Usage |
| :--- | :--- | :--- |
| **`--pink`** (`bg-pink`) | `#fff5f7` | **Standard Page & Section Background** across all inner pages and light sections. |
| **`--rose`** (`bg-rose`, `text-rose`, `border-rose`) | `#e83e74` | **Primary Brand Color** — CTA buttons, active pills, badges, icon highlights, borders. |
| **`--rose-dark`** (`hover:bg-rose-dark`) | `#c53658` | Primary button hover state. |
| **`--blue`** (`bg-blue`, `text-blue`, `ring-blue`) | `#0047ca` | **Secondary Brand Color** — Secondary CTA buttons, key actions. |
| **`--blue-dark`** (`hover:bg-blue-dark`) | `#0037a3` | Secondary button hover state. |
| **`--navy`** (`bg-navy`, `text-navy`) | `#061532` | TopBar, Footer, and Home Hero slider background. |
| **`--navy-mid`** | `#0a1f45` | Subtle dark gradients in Home Hero. |
| **`--ink`** (`text-ink`) | `#0f2438` | **Standard Body & Heading Text** on light/pink backgrounds. |
| **White (`#ffffff`)** | `#ffffff` | Clean card backgrounds, input backgrounds, and text on dark backgrounds. |

> [!CAUTION]
> **Forbidden:** Do NOT invent new colors, do NOT introduce random hex values (like `#f00`, `#ff3366`, `#111827`, `#006d6d`, etc.), and do NOT use dark/black backgrounds on inner procedure pages. All pages must share the exact light pink (`--pink`) / clean white visual identity established on the home page.

---

## 2. Strict Typography Rules

- **Only Two Fonts Allowed:** **`Poppins`** and **`Tahoma`**.
- Absolutely NO other fonts (no Inter, Roboto, Arial, Times New Roman, Playfair, etc.).
- Never hardcode font families inline; always use:
  - `font-sans` (`var(--font-poppins), Tahoma, sans-serif`)
  - `font-serif` (`Tahoma, var(--font-poppins), sans-serif`)
  - `font-display` (`var(--font-poppins), Tahoma, sans-serif`)

---

## 3. Hero Banner & Image Rules

1. **Standardized Hero Component:**
   - Every inner page hero banner image MUST use `HeroBannerImage` (`components/ui/HeroBannerImage.tsx`):
     ```tsx
     <HeroBannerImage
       src={imageSrc}
       alt="Dr. Mona Dahiya - ..."
     />
     ```
   - Maintains uniform `aspect-[4/5]`, standardized max widths (`340px sm:400px lg:450px xl:480px`), white border (`border-4 border-white`), and soft shadow across all 48+ pages.

2. **No Head/Hair Cropping:**
   - Always ensure images have ample headspace above Dr. Mona Dahiya's hair.
   - NEVER use tight landscape photos in vertical 4:5 frames that chop off the top of the head.
   - Use high-definition vertical portraits from `public/images/` (such as `/images/Confident-Doctor.png` which has an exact 4:5 aspect ratio and zero cropping).

3. **Real Photos Only:**
   - Never use AI-generated images with distorted faces or hands.
   - Use verified doctor/clinic images from `public/images/`.

---

## 4. Code & Data Integrity

- **`data/site.json` Encoding:** Must ALWAYS be saved strictly in UTF-8 without BOM (`0xEF, 0xBB, 0xBF`). Never let Windows/PowerShell write a BOM to JSON files as it crashes Next.js / Turbopack with `invalid JSON (1:1)`.
- **Validation:** Always verify changes with `npx tsc --noEmit` to maintain zero compilation errors.
