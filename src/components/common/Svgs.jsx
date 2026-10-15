import { cloneElement } from 'react'

const icons = {
  menu: (
    <svg
      aria-hidden="true"
      fill="currentColor"
      focusable="false"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
    </svg>
  ),
  close: (
    <svg
      aria-hidden="true"
      fill="currentColor"
      focusable="false"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="m19 6.41-1.41-1.41L12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  ),
  chevronDown: (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m6 9 6 6 6-6"
      />
    </svg>
  ),
}

export function Svgs({ name, ...props }) {
  const icon = icons[name]
  return icon ? cloneElement(icon, props) : null
}
