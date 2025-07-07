import React from 'react';
import { IBaseBlock } from './types';
import { getCompFromIden } from './mapping';

interface Props {
  schema: IBaseBlock<any>;
}

const RenderBlocks: React.FC<Props> = ({ schema }) => {
  if (!schema.identifier) return null;
  let Component = getCompFromIden(schema.identifier);
  if (!Component) return null;
  return (
    <Component {...schema.metadata}>
      {schema.metadata?.children ?? null}
      {schema.items.map((item, index) => (
        <RenderBlocks schema={item} key={item.identifier + index} />
      ))}
    </Component>
  );
};

export default RenderBlocks;
