export type UseDisclosureInitialStateType = boolean;

export type UseDisclosureCallbackType = {
  /**
   * call function when state is opened
   */
  onOpen?: () => void;

  /**
   * call function when state is closed
   */
  onClose?: () => void;
};
