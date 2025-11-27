import Gsap from "gsap";

/**
 * Animates an element so that it slides up while fading in
 * @param target - The target HTML element (should be an ID in most cases)
 */
export const slideUpFadeIn = (target: string): void =>
  void Gsap.from(target, {
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
export const opacityFadeIn = (target: string) => {
  Gsap.set(target, {
    opacity: 0,
  });

  Gsap.to(target, {
    opacity: 1,
    duration: 0.2,
    ease: "none",
  });
};
