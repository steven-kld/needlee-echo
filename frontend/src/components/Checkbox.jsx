export default function Checkbox({ children, onChange, checked }) {
  return (
    <label className="flex mt-4 items-start space-x-3 text-[15px] text-gray-600 cursor-pointer max-w-[200px] mx-auto leading-snug">
      <input
        type="checkbox"
        className="form-checkbox h-4 w-4 rounded border-gray-300 text-[#00B2FF] focus:ring-0"
        onChange={onChange}
        checked={checked}
      />
      <span className="select-none">{children}</span>
    </label>
  )
}
