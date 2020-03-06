import { adjustValueToStep } from '..';

/**
 * Wrapper on adjustValueToStep utility function
 */
const adjustToStep = function adjustToStepFromHelpers(step, offset) {
  return (value) => adjustValueToStep(value, step, offset);
};

export default adjustToStep;
