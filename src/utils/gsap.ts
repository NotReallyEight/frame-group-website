import Gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";

/**
 * Options for createSmoothWrapper
 */
interface SmoothWrapperOptions {
  content: string | HTMLElement;
  wrapper: string | HTMLElement;
  quicker?: boolean;
}

/**
 * Animates an element so that it slides up while fading in
 * @param target - The target HTML element (should be an ID in most cases)
 */
export const slideUpFadeIn = (target: string) =>
  Gsap.from(target, {
    opacity: 0,
    y: window.innerHeight,
    duration: 1,
    ease: "power3.out",
  });

/**
 * Sets the opacity of an element to animate it linearly so that it creates an opacity
 * fade in effect
 * @param target The target HTML element (should be an ID in most cases)
 */
export const opacityFadeIn = (target: string): void => {
  Gsap.set(target, {
    opacity: 0,
  });

  Gsap.to(target, {
    opacity: 1,
    duration: 0.2,
    ease: "none",
  });
};

/**
 * Create a smooth scrolling wrapper using GSAP's ScrollSmoother
 * @param options - The options to configure the scrolling wrapper
 * @param options.content - The content element or selector
 * @param options.wrapper - The wrapper element or selector
 * @param options.quicker - When true, reduces the smoothing for a snappier feel
 */
export const createSmoothWrapper = ({
  content,
  quicker,
  wrapper,
}: SmoothWrapperOptions): void => {
  ScrollSmoother.create({
    content,
    wrapper,
    smooth: quicker ? 0.25 : 1,
    effects: true,
    smoothTouch: quicker ? 0.1 : 1,
    normalizeScroll: true,
  });
};
