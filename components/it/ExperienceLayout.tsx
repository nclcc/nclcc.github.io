import Base from "@/components/ExperienceLayout";
import type { ComponentProps } from "react";

export default function ExperienceLayout(props: ComponentProps<typeof Base>) {
  return <Base {...props} italian />;
}
