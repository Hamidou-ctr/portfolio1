const SCROLL_OFFSET_PX = 100;

/** Smoothly scrolls to the element with the given id, leaving room for the navbar. */
export function scrollToId(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    const top =
      element.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET_PX;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}
