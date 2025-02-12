import { Card } from "@/app/routing/components/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div>Notifications</div>
      <div>
        <Link href="/dashboard/archiced">Archice Notifications</Link>
      </div>
    </Card>
  );
}
