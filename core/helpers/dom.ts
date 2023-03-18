// @imports
/**
 *
 * method returns if window exist
 */
export const domExistsHandler = () => {
  const domExists =
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement;

  return !!domExists;
};

export const preventPageScrollingHandler = (prevent?: boolean) => {
  if (domExistsHandler() && prevent) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }
};
