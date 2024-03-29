export * from './transitions';

// @styles
export const transitionStyle = (option?: {
  property: string;
  duration: number;
  delay: number;
  timing: string;
}) => {
  const property = option?.property || 'all';
  const duration = option?.duration || '200ms';
  const delay = option?.delay || '';
  const timing = option?.timing || 'ease-in-out';

  return `transition: ${property} ${duration} ${timing} ${delay};`;
};

export const flexCenterStyle = `
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const flexCenterYStyle = `
  align-items: center;
  display: flex;
`;

export const flexCenterXStyle = `
  display: flex;
  justify-content: center;
`;

export const positionCenterStyle = (option?: { transform: string }) => {
  const additionalTransformProperty = option?.transform || '';

  return `
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) ${additionalTransformProperty};
  `;
};
