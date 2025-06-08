export default function Noise() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-[#d9d5f0] via-[#dfe7f9] to-[#ecf0fb]" />
      <div
        className="absolute inset-0 opacity-60 mix-blend-overlay blur-[1px]"
        style={{
          backgroundImage: 'url("/textures/noise.png")',
          backgroundSize: '75px 75px',
          backgroundRepeat: 'repeat',
        }}
      />
    </div>
  )
}