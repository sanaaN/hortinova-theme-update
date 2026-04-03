# Hortinova Theme Upgrade Constitution

## 1. Project Purpose
This project maintains and improves the Hortinova Shopify storefront by upgrading to newer theme versions without losing business-critical custom features from the previous theme.

The goal is to keep the store maintainable, performant, and easy to update in the future.

---

## 2. Theme Upgrade First
When implementing changes, prefer extending or configuring the new theme instead of copying old code blindly from the previous theme.

Rules:
- Reuse native theme patterns when they meet the requirement.
- Avoid large direct edits to core theme files when a snippet, section, block, or app block can be used instead.
- Preserve compatibility with future theme updates whenever possible.
- Before migrating old custom code, conduct a deliberate audit to confirm the new theme does not already support the same feature. This audit happens before any migration begins, not on the fly.

---

## 3. Customizations Must Be Isolated
All custom features migrated from the previous theme must be clearly separated from theme core code.

Rules:
- Place custom logic in clearly named snippets, sections, blocks, assets, or templates.
- Use consistent naming for custom files, such as `custom-*` or `hortinova-*`.
- Add short comments where the reason for customization may not be obvious.
- Do not mix unrelated concerns in one file.
- Prefer small, focused changes over large rewrites.

---

## 4. Shopify Admin Friendliness
Changes should remain easy for a merchant to manage through the Shopify theme editor whenever reasonable.

Rules:
- Prefer section settings, block settings, metafields, and metaobjects over hardcoded content.
- Keep text, images, links, and repeated content editable in the admin.
- Do not remove useful theme editor flexibility unless there is a strong reason.
- Default settings should be safe and visually acceptable.

---

## 5. Performance Must Be Protected
No customization should significantly harm storefront speed or user experience.

Rules:
- Minimize JavaScript and only add it when necessary.
- Avoid duplicate libraries and unnecessary dependencies.
- Load assets only where needed.
- Prefer server-rendered Liquid output over heavy client-side rendering when possible.
- Optimize images and avoid layout shifts.
- Consider mobile performance first.

---

## 6. Accessibility Is Required
All user-facing changes must maintain reasonable accessibility standards.

Rules:
- Use semantic HTML.
- Preserve keyboard accessibility.
- Ensure buttons, links, forms, and interactive elements are properly labeled.
- Do not rely on color alone to communicate meaning.
- Maintain readable contrast and clear content structure.

---

## 7. Design Consistency
Custom features should match the look and behavior of the active theme unless a deliberate business decision says otherwise.

Rules:
- Reuse existing theme styles, spacing, typography, and UI patterns where possible.
- Avoid introducing isolated design patterns that feel disconnected from the rest of the store.
- Keep the customer experience consistent across homepage, collection, product, cart, and informational pages.

---

## 8. Content and Information Accuracy
When updating informational content such as policies, company information, or educational sections, accuracy is more important than speed.

Rules:
- Confirm business content before publishing.
- Keep wording clear and simple.
- Do not invent legal, agricultural, product, or policy claims.
- If content is uncertain, mark it for review instead of publishing assumptions.

---

## 9. Safe Change Process
Every meaningful change should be implemented in a way that reduces regression risk.

Rules:
- Review the affected template, section, snippet, settings, and assets before editing.
- Always test changes on the designated unpublished dev theme, never on the live published theme.
- Check how the feature behaves on desktop and mobile.
- Check core flows after changes: homepage, collection, product page, cart, search, and any affected custom pages.
- Prefer incremental changes that can be reviewed and tested easily.
- No change may be published to the live store without explicit approval from the store owner.

---

## 10. Documentation for Future Updates
Each migrated or newly added custom feature should be easy to understand later.

Rules:
- Document what was added, where it lives, and why it exists.
- Record any dependency on metafields, metaobjects, apps, or theme settings.
- Record manual QA steps for important features.
- Record any known limitations or follow-up work.

---

## 11. Non-Goals
This constitution does not define one specific feature implementation.

Feature-specific details such as:
- restoring an old custom section
- rebuilding a specific banner
- changing the navigation behavior
- adding a new product page feature

must be written in individual feature specs, not in this constitution.

---

## 12. Version Control and Branching
All theme changes must be tracked in Git through the GitHub spec-kit repository. Direct edits to the main branch are not allowed.

Rules:
- The `main` branch always reflects the current published theme state.
- Create a dedicated branch for each feature or fix, using the naming pattern `feature/short-description` or `fix/short-description`.
- Each commit message should reference the related spec or task (e.g., `feat: restore custom badge snippet — spec #04`).
- Open a pull request for review before merging any change, even when working solo. This creates a reviewable history.
- All pull requests require store owner approval before merging.
- Do not bundle unrelated changes in the same branch or pull request.
- Tag a release in Git when a new theme version is published to the live store.

---

## 13. Custom Feature Inventory
Before any theme migration begins, every existing customization in the current published theme must be catalogued.

Rules:
- Produce a written inventory of all custom files, modified core files, custom snippets, sections, blocks, templates, and assets currently present in the published theme.
- For each item, record: file name, what it does, where it renders, and any dependencies on apps, metafields, metaobjects, or settings.
- The inventory must be completed and reviewed before any upgrade work starts.
- During migration, mark each inventory item as: **native** (new theme already supports it), **to migrate** (must be rebuilt), or **deprecated** (no longer needed).
- The inventory lives in the repository and is updated as the project progresses.

---

## 14. Rollback and Snapshot Safety
The current published theme must remain recoverable at any point during the upgrade process.

Rules:
- Before starting the upgrade, duplicate the current published theme in the Shopify admin and rename it with the date (e.g., `Hortinova — Snapshot 2025-06-01`).
- Keep this snapshot available in the theme library until the upgraded theme has been fully QA'd and is confirmed stable in production.
- Never overwrite or delete the snapshot during active migration work.
- If a critical issue is discovered after publishing the upgraded theme, revert to the snapshot immediately and investigate on the dev theme.
- All testing must happen on the designated unpublished dev theme, never on the live published theme.

---

## 15. App and Integration Audit
A theme upgrade can silently remove or break installed app blocks, scripts, and integrations. This must be checked deliberately.

Rules:
- Before upgrading, document every app currently embedded in the theme: app blocks, app embeds, script tags, and Klaviyo integrations.
- After installing the new theme version, verify that all app blocks are re-added to the correct templates in the theme editor.
- Check that Klaviyo customer events, tracking scripts, and any form embeds are functioning correctly after the upgrade.
- Confirm that any metafield or metaobject dependencies used by apps are still correctly connected.
- App integrations must be included in the final QA checklist before publishing.
