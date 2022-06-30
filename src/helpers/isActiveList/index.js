export function isActive(index, activeIndex) {
  if (index === activeIndex) {
    return 'active';
  }

  return 'hide';
}
