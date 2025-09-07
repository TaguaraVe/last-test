import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon className="text-primary h-5 w-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="min-h-[4.5rem]">
        <CardDescription className="line-clamp-3 overflow-hidden text-ellipsis">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
