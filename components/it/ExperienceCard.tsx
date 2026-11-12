import Base from "@/components/ExperienceCard";
import type { ComponentProps } from "react";

export default function ExperienceCard(props: ComponentProps<typeof Base>) {
  return <Base {...props} italian />;
}
