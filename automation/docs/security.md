# Security

## API keys

- Store keys in environment variables or a local `.env` file.
- Do not commit keys to git.
- Rotate keys immediately if they are shared in chat or logs.

## Required variables

- `PPLX_API_KEY`
- `BRAVE_API_KEY` (optional)

## Recommended practice

- Use `PPLX_BASE_URL` and `PPLX_MODEL` to avoid hardcoding.
- Keep all raw fetches and transcripts in `automation/.cache/`.
