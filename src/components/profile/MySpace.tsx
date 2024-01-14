import { Modal } from "components/common/Modal";
import { createPortal } from "react-dom";

const MySpace = () => {
  return (
    <div className="text-center mt-10">
      <h1>Login to Disney+ Hotstar</h1>
      <p>Start watching from where you left off</p>
      <button className="bg-gradient-to-r from-blue-700 to-blue-900 text-[--brand-white] py-1 px-3 rounded">
        Login
      </button>
      {createPortal(<Modal />, document.body)}
    </div>
  );
};

export default MySpace;
