export function AmbientBackground({ variant = "default" }) {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div
        className="glow-blob animate-float-slow w-[32rem] h-[32rem] bg-primary/40 top-[-8rem] left-[-6rem]"
        aria-hidden="true"
      />
      <div
        className="glow-blob animate-float-slower w-[28rem] h-[28rem] bg-accent/30 bottom-[-6rem] right-[-8rem]"
        aria-hidden="true"
      />
      {variant === "default" && (
        <div
          className="glow-blob animate-float-slow w-[20rem] h-[20rem] bg-primary/20 top-1/3 right-1/4"
          aria-hidden="true"
          style={{ animationDelay: "-4s" }}
        />
      )}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,var(--background))]"
        aria-hidden="true"
      />
    </div>
  )
}
