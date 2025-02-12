import { Card } from "@/app/routing/components/card";
import Link from "next/link";

export default function ArvhivedNotifications() {
  return (
    <Card>
      <div>Arvhived Notifications</div>
      <div>
        <Link href="/dashboard">Default Notifications</Link>
      </div>
    </Card>
  );
}
