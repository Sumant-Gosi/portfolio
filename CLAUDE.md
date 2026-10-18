# Portfolio Website: Sumant Shivaram Gosi

## Goal
A personal portfolio website for an automotive embedded software engineer who is job hunting in Germany.
The audience is recruiters, hiring managers and technical leads at OEMs, Tier 1 suppliers and engineering service providers (IAV, Bosch, Scalian, Cognizant Mobility and similar).
They spend under a minute on the page. Within that time they should understand: who I am, what tools and protocols I know, that I can prove it with projects, and how to contact me or download my CV.

## Tech stack
- Next.js (App Router) with TypeScript
- Tailwind CSS
- Static content only (no database, no CMS). All content lives in typed data files under `src/content/`.
- Deployed on Vercel from a GitHub repository (push to `main` = production deploy)
- No heavy animation libraries. Subtle CSS transitions only.
- Must score 90+ on Lighthouse for performance, accessibility and SEO.

## Languages
- Bilingual: English (default) and German, with a language switch in the header.
- Routes: `/en` and `/de`. Keep all text in `src/content/en.ts` and `src/content/de.ts` so nothing is hardcoded in components.
- German text must be natural business German (Sie form), not word-for-word translation.

## Design direction
- Clean, technical, engineering feel. Think datasheet or oscilloscope, not startup landing page.
- Dark mode and light mode, following system preference, with a toggle.
- Navy base with one cyan accent: background #101923, surface #1A2936, accent #55C4D8, text #F0F4F8 (light mode: off-white with a teal-cyan accent). Use the accent only for buttons, links, active navigation and a few highlights.
- Fonts: Titillium Web for headings, Geist for body text, Geist Mono for small technical labels (protocol names, tool tags).
- Fully responsive. Must look good on a phone, because recruiters often open links from LinkedIn on mobile.

## Page sections (single page with anchor navigation)
1. **Hero**: title "Embedded Software Engineer | Automotive" as a small cyan eyebrow, name as the headline, one line summary, a keyword line, equal-size buttons "Download CV" (primary), "LinkedIn" and "GitHub". Small line: "Open to roles across Germany". Right side: card with the profile photo (uncropped) and key facts.
2. **About**: 3 to 4 short sentences. Automotive embedded software at IAV and Bosch, testing and integration, ASPICE and ISO 26262 environment, active upskilling.
3. **Skills**: grouped tag cloud using the groups below. Each group is a card.
4. **Experience**: timeline. IAV GmbH (current), Bosch India (previous), internship.
5. **Projects**: cards with title, short problem/solution text, tech tags, and GitHub link (if available).
6. **Training & Education**: Master's degree (thesis with AI/ML), Jacks Technologies AET4 (completed 2026), Python For Automotive (in progress 2026).
7. **Languages**: English C1, German B2 (C1.2 course in progress). The driving licence (Class B) has its own small section after Hobbies; the location sits as a details line in Contact.
8. **Contact**: email button and LinkedIn link. No contact form needed.

## Content: Skills
- **Programming**: C, C++, Python (OOP), MATLAB/Simulink, TargetLink, ASCET, CAPL
- **Testing**: SiL (TPT), HiL (ETAS LABCAR, dSPACE ControlDesk, AutomationDesk), Polyspace, ETAS INCA, PyTest, Robot Framework, Appium, IBM RQM
- **Processes & Standards**: V-Model, AUTOSAR (Classic & Adaptive), ASPICE, MISRA-C, MXAM, Agile, ISO 26262
- **Vector Toolchain**: CANoe (incl. Python scripting), CANape (A2L), vTestStudio, vCDMstudio
- **Firmware**: CMake, FreeRTOS, Zephyr RTOS, Lauterbach Trace32 (SWD/JTAG)
- **Communication Protocols**: CAN, CAN FD, UDS (ISO 14229), XCP, Automotive Ethernet (DoIP, SOME/IP), AUTOSAR NM, UART, SPI, I2C, PCAN
- **DevOps**: Jenkins, GitLab CI, GitHub Actions, Docker
- **Version Control & Documentation**: Git, IBM DOORS, Polarion, SBM, PVCS, Jira, Confluence

## Content: Experience
- **IAV GmbH, Germany (current)**: Software development, software quality analysis and software integration in an AUTOSAR, ASPICE and ISO 26262 environment.
- **Bosch India (previous)**: Embedded software engineering. Software requirements engineering in IBM DOORS.
- **Internship (Embedded AI), Bosch Global Software Technologies, Renningen, Germany**: deployment pipeline for DNNs on STM32 (NUCLEO-F767ZI) with STM32Cube.AI and Zephyr RTOS.
- FreeRTOS is self-taught (personal projects on STM32 F446RE), not part of any job or internship.

Do NOT invent dates, customer names, project names or achievements. Use placeholders like `[DATES]` where information is missing and list them for me to fill in.

## Content: Projects (initial set, placeholders where details are missing)
1. **STM32 FreeRTOS firmware** (personal project): multi task firmware on ARM Cortex M4, peripheral drivers (UART, SPI, I2C), debugging via SWD. GitHub: https://github.com/Sumant-Gosi/stm32-freertos-deepdive
2. **CAN / CAPL test automation**: rest bus simulation and automated test cases in CANoe with CAPL.
3. **UDS diagnostic tests**: diagnostic services (ISO 14229) tested via CANoe / vTestStudio.
4. **ADAS ACC test automation with Python**: CANoe Python scripting + PyTest, run in a Jenkins CI pipeline.
5. **Infotainment test automation**: Robot Framework + Appium.
6. **Master's thesis (AI/ML)**: `[THESIS TITLE AND SHORT DESCRIPTION]`.

Projects are stored in `src/content/projects.ts` so I can add or remove them easily.

## Writing rules
- Human, confident, concrete tone. No buzzword filler ("passionate", "rockstar", "synergy").
- Do not use em dashes or hyphens as sentence punctuation. Use commas, periods or colons instead. (Hyphens inside fixed terms like "ISO 26262" contexts or "in-vehicle" are fine.)
- No salary information anywhere.
- Never mention confidential employer or customer project details. Keep work descriptions at the level of tasks, tools and processes.

## Files and assets
- CV PDF goes in `public/cv/Sumant_Gosi_CV_EN.pdf` and `public/cv/Sumant_Gosi_CV_DE.pdf`. The download button picks the file matching the current language.
- Profile photo (optional) in `public/images/profile.jpg`. If missing, show initials instead.
- Add proper metadata: page title, description, Open Graph image, favicon.

## Working style for Claude Code
- Build step by step: scaffold first, then layout and theme, then one section at a time.
- After each step, run `npm run build` and `npm run lint` and fix all errors before moving on.
- Keep components small and in `src/components/`.
- Ask me before adding any new dependency.
