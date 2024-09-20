import Selector from '../Module/selector';
import Datepick from '../Module/datepicker';
import Mybutton from '../Reuse components/mybutton';

function AddModule({ closeDrawer  }) {

    const moduleadded = () => {
        console.log('Your module has been added');
    };
    
  return (
    <div className="md:w-full lg:w-[468px] bg-[#f6f6f8] border p-6 rounded-[12px]">
      <div className="flex justify-between items-center">
        <h2 className="text-[20px] font-[600]">Add New Item In New Module</h2>
       
        <button onClick={closeDrawer}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <Selector />
      <div className="flex flex-col mt-5 border rounded-[12px] border-[#D0D5DD] h-[150px] items-center justify-center">
        <input type="file" />
      </div>
      <Datepick />
      <Mybutton className="border text-[#0348B7] border-[#0348B7]" text="Add Prerequisite" />

      <hr className="mt-3" />
      <div className="flex justify-between pt-4 mb-4">
        <Mybutton onClick={closeDrawer} text="Cancel" />
        <Mybutton onclick={moduleadded} className="bg-[#0348B7] text-white" text="Add Module" />
      </div>
    </div>
  );
}

export default AddModule;
