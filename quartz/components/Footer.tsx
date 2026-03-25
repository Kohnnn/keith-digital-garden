import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"
import { isAbsoluteURL, isFullSlug, resolveRelative } from "../util/path"

interface Options {
  links: Record<string, string>
  blurb?: string
}

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d="M12 1.5A10.5 10.5 0 0 0 8.68 22c.53.1.72-.23.72-.52v-1.83c-2.95.64-3.57-1.25-3.57-1.25-.48-1.2-1.17-1.52-1.17-1.52-.96-.66.07-.65.07-.65 1.06.08 1.62 1.1 1.62 1.1.95 1.62 2.48 1.15 3.09.88.1-.68.37-1.15.67-1.41-2.35-.27-4.82-1.17-4.82-5.24 0-1.15.41-2.08 1.08-2.82-.11-.27-.47-1.37.1-2.86 0 0 .88-.28 2.9 1.08a10.1 10.1 0 0 1 5.28 0c2.01-1.36 2.89-1.08 2.89-1.08.58 1.49.22 2.59.11 2.86.67.74 1.07 1.67 1.07 2.82 0 4.08-2.48 4.96-4.84 5.22.38.33.72.98.72 1.98v2.94c0 .29.19.63.73.52A10.5 10.5 0 0 0 12 1.5Z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.55A1.96 1.96 0 1 0 3.24 4.9a1.96 1.96 0 0 0 3.92.05ZM20.45 20h-3.37v-5.59c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95V20H9.71V8.5h3.23v1.57h.05c.45-.85 1.55-1.74 3.2-1.74 3.42 0 4.05 2.25 4.05 5.18V20Z" />
  </svg>
)

const RssIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path
      d="M6.18 17.82a2.14 2.14 0 1 0 0 4.28 2.14 2.14 0 0 0 0-4.28ZM3 9.31v3.08a8.62 8.62 0 0 1 8.61 8.61h3.08C14.69 14.79 9.21 9.31 3 9.31Zm0-6.16v3.08C12.62 6.23 20.77 14.38 20.77 24h3.08C23.85 12.68 14.32 3.15 3 3.15Z"
      transform="translate(-0.85 -0.9)"
    />
  </svg>
)

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg, fileData }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? {}
    const blurb = opts?.blurb
    const socialLinks = [
      { label: "GitHub", href: "https://github.com/Kohnnn", Icon: GitHubIcon },
      { label: "LinkedIn", href: "https://linkedin.com/in/kiet-vo-097", Icon: LinkedInIcon },
      ...(cfg.baseUrl
        ? [{ label: "RSS", href: `https://${cfg.baseUrl}/index.xml`, Icon: RssIcon }]
        : []),
    ]

    return (
      <footer class={`${displayClass ?? ""}`}>
        <p class="footer-kicker">Service Counter</p>
        <p class="footer-blurb">
          {blurb ? (
            `${blurb} © ${year}`
          ) : (
            <>
              {i18n(cfg.locale).components.footer.createdWith}{" "}
              <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
            </>
          )}
        </p>
        <div class="footer-socials" aria-label="Social links">
          {socialLinks.map(({ label, href, Icon }) => (
            <a class="footer-social" href={href} aria-label={label} title={label}>
              <Icon />
            </a>
          ))}
        </div>
        <ul class="footer-links">
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a
                href={
                  isAbsoluteURL(link) || !isFullSlug(link)
                    ? link
                    : resolveRelative(fileData.slug!, link)
                }
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
