import React from 'react';
import { useActiveIndex } from '../../hooks/useActiveIndex';
import '../../index.css';

import { isActive } from '../../helpers/isActiveList';
import { IconTop } from '../IconTop';

export const Accordion = ({ items }) => {
  const { activeIndex, onTitleClick } = useActiveIndex();

  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div className='title' onClick={() => onTitleClick(index)}>
          <strong>{item.title}</strong>
          <div className='dropdown'>
            {IconTop(isActive(index, activeIndex))}
          </div>
        </div>
        <div className={isActive(index, activeIndex)}>
          <p dangerouslySetInnerHTML={{ __html: item.content }} />
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className='accordion-style'>
      <div>{renderedItems}</div>
    </div>
  );
};
