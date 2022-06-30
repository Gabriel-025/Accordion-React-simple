import Closed from '../Icons/cloesed';
import OpenIt from '../Icons/open';

export function IconTop(type) {
  if (type === 'hide') {
    return <Closed size={24} />;
  }

  return <OpenIt size={24} />;
}
