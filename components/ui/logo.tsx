export default function Logo({ className }: { className?: string }) {
  return (
    <span className={`bricolage text-[10vw] font-[800] sm:text-[12vw] md:text-[13vw] lg:text-[14vw] ${className}`}>
      Logi
      <div className="inline-flex flex-row items-center">
        <span
          style={{
            background: "linear-gradient(40.01deg, #4BBFE9 16.66%, #4BBFE9 52.05%, #007AFF 84.06%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="text-night-blue -mr-2 rotate-180 sm:-mr-3 md:-mr-4"
        >
          C
        </span>
        <span
          style={{
            background: "linear-gradient(38.01deg, #4BBFE9 16.66%, #4BBFE9 52.05%, #007AFF 84.06%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="text-night-blue -ml-2 sm:-ml-3 md:-ml-4"
        >
          C
        </span>
      </div>
      raft
    </span>
  );
}
