import { Identifier } from './types';
import { componentIdentifierMapping } from './utils';

export const getCompFromIden = (identifier: Identifier) => {
  let component = componentIdentifierMapping[identifier];
  if (!component) return null;
  return component;
};
