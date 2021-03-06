import Button from '../../button';
import * as React from 'react';
import Dialog from '../dialog';
import { useState } from 'react';
type Props = {};
export const DialogBasicDemo: React.FC<Props> = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button label="important" icon="external-link" onClick={()=>setVisible(true)}>
        Show
      </Button>
      <Dialog
        visible={visible}
        closeOnClickMask={true}
        onClose={() => {
          setVisible(false);
        }}
      >
        <div>main-content</div>
      </Dialog>
    </>
  );
};
