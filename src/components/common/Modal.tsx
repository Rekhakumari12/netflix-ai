import { Input } from "./Input";

export const Modal = () => {
  return (
    <dialog
      className="relative z-10"
      aria-labelledby="login-modal"
      aria-modal="true"
      open
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-[var(--brand-blue)] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-[var(--brand-blue)] px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    className="text-xl font-semibold leading-6 text-[var(--text-white)]"
                    id="login-modal"
                  >
                    Log in or sign up to continue
                  </h3>
                  <Input label={"Email"} type="text" />
                  <Input label={"Password"} type="password" />
                  <div className="mt-2">
                    <span className="text-[var(--text-grey)] text-xs">
                      By proceeding you confirm that you are above 18 years of
                      age and agree to the Privacy Policy &amp; Terms of Use.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[var(--brand-blue)] px-4 py-3 flex justify-center sm:px-6">
              <button className="bg-gradient-to-r from-blue-700 to-blue-900 text-[--brand-white] py-1 px-3 rounded">
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};
