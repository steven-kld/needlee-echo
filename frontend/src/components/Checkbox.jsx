export default function Checkbox({ children, onChange, checked }) {
  return (
    <label className="flex items-center justify-center gap-3 mt-4 text-[15px] text-gray-600 cursor-pointer mx-auto text-center leading-snug">
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
