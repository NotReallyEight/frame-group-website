import Image from "next/image";
import images from "@/utils/images";
import ConditionalWrapper from "./ConditionalWrapper";

type Props = {
  dark?: boolean;
  redirects?: boolean;
  bigger?: boolean;
};

const Logo = ({ dark = false, redirects = true, bigger = false }: Props) => (
  <ConditionalWrapper
    condition={redirects}
    wrapper={(children) => (
      // Note: the <Link /> component would break our rendering
      // eslint-disable-next-line @next/next/no-html-link-for-pages
      <a href="/" title="Fotografi Frame">
        {children}
      </a>
    )}
  >
    <Image
      src={dark ? images.logo.black : images.logo.white}
      alt="Frame Logo"
      width={540}
      height={540}
      className={`${bigger ? `max-h-half-width max-w-half-width lg:max-h-half-height lg:max-w-half-height` : "max-h-20 max-w-20 xl:max-h-24 xl:max-w-24"}`}
    />
  </ConditionalWrapper>
);

export default Logo;
