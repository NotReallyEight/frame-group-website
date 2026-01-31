const SOCIAL_LINKS: {
  label: string;
  href: string;
}[] = [
  {
    label: "Instagram",
    href: "/",
  },
  {
    label: "Vimeo",
    href: "/",
  },
  {
    label: "LinkedIn",
    href: "/",
  },
];

const Footer = () => (
  <footer className="flex flex-col snap-end text-white px-8 md:px-12 lg:px-[10dvw] gap-8 xl:gap-12 mt-8 xl:mt-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center justify-center">
      <div className="flex flex-col gap-4">
        <div className="font-family-header group">
          Let&apos;s
          <br />
          <span className="group-hover:text-accent duration-(--transition-duration)">
            Create.
          </span>
        </div>
        <div className="xl:w-[50%] font-family-regular-md text-text-secondary pl-4 border-l-2 border-l-accent">
          Have a project in mind? We are currently accepting new clients for Q4
          2024.
        </div>
      </div>

      <div className="flex flex-col items-start md:items-end gap-2 md:gap-4">
        <a
          href="mailto:antonio@framegroup.it"
          className="font-family-regular-lg font-light text-2xl md:text-3xl xl:text-4xl hover:text-accent duration-(--transition-duration)
                        after:border-b-2 after:border-b-white after:block after:scale-x-0 hover:after:scale-x-100 hover:after:border-b-accent after:origin-left after:duration-(--grid-fade-in-duration)"
        >
          antonio@framegroup.it
        </a>
        <div className="flex flex-col gap-1 items-start md:items-end text-text-muted font-family-regular-md">
          <a href="tel:+390212345678">+39 02 1234 5678</a>
          <div className="md:text-right">
            Via Alfredo Bartolomei, snc, Sant&apos;Angelo dei Lombardi, IT
          </div>
        </div>
      </div>
    </div>

    <div className="h-px w-full bg-border" />

    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
      <div className="flex flex-row gap-8 justify-between xl:justify-start w-full">
        {SOCIAL_LINKS.map((link, index) => (
          <a
            href={link.href}
            key={`social-link-${index}`}
            className="font-family-regular-lg w-full xl:w-auto text-center xl:text-left text-text-muted hover:text-white duration-(--transition-duration) text-xs tracking-widest font-bold uppercase"
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="flex flex-row gap-8 *:w-full xl:*:w-auto xl:ml-auto font-family-regular-lg text-text-muted text-xs text-center tracking-widest font-bold uppercase mb-8 xl:mb-12 justify-between xl:justify-end w-full">
        <div>© Frame Group {new Date().getFullYear()}</div>
        <div>P.IVA: 1234567890</div>
        <a
          href="/privacy-policy"
          className="hover:text-white text-center duration-(--transition-duration)"
        >
          Privacy Policy
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
