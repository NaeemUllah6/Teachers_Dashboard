import { useState } from 'react';
import AddModule from '../course components/addmodule';
function Drawer(props) {
    const { onClose } = props;  // receive close function from parent component
    const [drawer, setDrawer] = useState (true)
    const close =() => {
        setDrawer(false)
       
        
    }

  return (
    <div className={`z-50 ${drawer ? 'block' :'hidden'}`}>
      <div
        className="fixed top-5 right-0 z-50 h-screen p-4 overflow-y-auto transition-transform transform w-[100%] md:w-[50%] dark:bg-gray-800 'translate-x-0' : 'translate-x-full'
        "
        tabindex="-1"
        aria-labelledby="drawer-right-label"
      >
        <div
          className={`absolute top-0 bottom-4 right-3 z-50 min-h-[500px] overflow-auto`}
        >
          <AddModule closeDrawer={onClose} />
        </div>
      </div>
    </div>
  );
}

export default Drawer;
