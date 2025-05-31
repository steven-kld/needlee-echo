export default function Noise() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none mix-blend-overlay opacity-50"
      style={{
        backgroundImage: 'url("/textures/noise.png")',
        backgroundSize: '75px 75px',
        backgroundRepeat: 'repeat',
      }}
    />
  )
}
