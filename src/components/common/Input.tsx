export const Input = ({ label, type }: { label: string; type: string }) => {
  return (
    <div className="relative m-4 ml-0 group">
      <input
        type={type}
        className="outline-none px-3 py-3 peer border-[var(--text-grey)] bg-transparent caret-[var(--text-white)] text-[var(--text-white)] w-full"
        placeholder=" "
        id="email"
      />
      <label
        className="absolute left-[9px] top-px text-sm text-[var(--text-dark-grey)] transition-all duration-300 px-1 transform -translate-y-1/2 pointer-events-none 
    peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-xl group-focus-within:!top-px group-focus-within:!text-sm group-focus-within:text-[var(--text-grey)]"
        htmlFor="email"
      >
        {label}
      </label>

      {/* This fieldset+legend is used for the the border and notch transition */}
      <fieldset
        className="inset-0 absolute border border-[var(--text-dark-grey)] rounded-lg pointer-events-none mt-[-9px] invisible peer-placeholder-shown:visible 
    group-focus-within:!border-[var(--text-grey)]"
      >
        <legend className="ml-2 px-0 text-sm transition-all duration-300 invisible max-w-[0.01px] group-focus-within:max-w-full group-focus-within:px-1 whitespace-nowrap">
          {label}
        </legend>
      </fieldset>

      {/* This fieldset+legend always has a notch and is shown when the input is filled, instead of the other, so the notch does'nt vanish when you un-focus the field */}
      <fieldset
        className="inset-0 absolute border border-[var(--text-dark-grey)] rounded-lg pointer-events-none mt-[-9px] visible peer-placeholder-shown:invisible 
    group-focus-within:border group-focus-within:!border-[var(--text-grey)]s"
      >
        <legend className="ml-2 text-sm invisible px-1 max-w-full whitespace-nowrap">
          {label}
        </legend>
      </fieldset>
    </div>
  );
};
