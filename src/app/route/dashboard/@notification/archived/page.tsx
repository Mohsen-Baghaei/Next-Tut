import { Card } from "@/components/card";
import Link from "next/link";

export default function ArchivedNotification() {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        <h2>Archived Notification</h2>
        <div>
          <Link href="/route/dashboard" className="text-blue-600">
            Default
          </Link>
        </div>
      </div>
    </Card>
  );
}
