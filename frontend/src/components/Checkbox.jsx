export default function Checkbox({ children, onChange, checked }) {
  return (
    <label className="flex flex-col items-center mt-4 text-[15px] text-gray-600 cursor-pointer max-w-[400px] mx-auto leading-snug text-center">
      <input
        type="checkbox"
        className="form-checkbox h-4 w-4 rounded border-gray-300 text-[#00B2FF] focus:ring-0 mb-2"
        onChange={onChange}
        checked={checked}
      />
      <span className="select-none">{children}</span>
    </label>
  )
}
