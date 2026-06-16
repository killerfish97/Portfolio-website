"use client";

export function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <div className="noise-overlay" />
      <div
        className="glow-orb w-[800px] h-[600px] -top-[250px] left-[10%] opacity-50"
        style={{ background: "radial-gradient(circle, #c7d2fe 0%, transparent 65%)" }}
      />
      <div
        className="glow-orb w-[600px] h-[500px] top-[30%] -right-[100px] opacity-40"
        style={{ background: "radial-gradient(circle, #a5f3fc 0%, transparent 65%)" }}
      />
      <div
        className="glow-orb w-[500px] h-[400px] bottom-[5%] left-[25%] opacity-35"
        style={{ background: "radial-gradient(circle, #fde68a 0%, transparent 65%)" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 50% -10%, rgba(199,210,254,0.45), transparent 55%)",
        }}
      />
    </div>
  );
}
