export default function ScrewdriverIcon({ active, size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={active ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 3.5L20.5 9.5L18 12L12 6L14.5 3.5Z" />
      <path d="M12 6L4.5 13.5C3.5 14.5 3.5 16 4.5 17L7 19.5C8 20.5 9.5 20.5 10.5 19.5L18 12" />
      <path d="M8 16L6.5 17.5" />
    </svg>
  )
}
