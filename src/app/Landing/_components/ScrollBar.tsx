import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

export function HorizontalScrollBar() {
  return (
    <VelocityScroll
      text=" Digifire Marketing Agency"
      default_velocity={5}
      className="font-display overflow-hidden text-center text-4xl font-bold tracking-[-0.02em] text-blue-400 drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
  );
}