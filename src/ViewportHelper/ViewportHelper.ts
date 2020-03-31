export const isInViewport = (
  element: Element | null,
  offset: number = 0
  //fromTop: boolean = false
): boolean => {
  if (element === null) throw new Error("Bad element");
  const distance = element.getBoundingClientRect();

  /* console.log(distance);
  console.log(element);
  console.log(document.documentElement.clientHeight);
  console.log(document.documentElement.scrollTop); */

  return (
    distance.top <=
    document.documentElement.clientHeight + document.documentElement.scrollTop
  );
};

export const isEndOfPageOnScroll = (): boolean => {
  return (
    document.documentElement.scrollHeight -
      (document.documentElement.scrollTop +
        document.documentElement.clientHeight) <=
    0
  );
};
