<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- The QR card files in `public/` are generated output — change the survey address or card copy in `scripts/make-survey-qr.mjs` and run `bun run make:survey-qr`, never hand-edit the generated files, so the printed code and the page it points at cannot drift apart.
- The survey entry page is a landing page the visitor acts on rather than an automatic jump, because the share-link and print-code controls need a visible page to sit on; keep the questionnaire choice on the click handler so the page still works with JavaScript off.
