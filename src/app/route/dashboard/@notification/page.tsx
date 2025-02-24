import { Card } from "@/components/card";
import Link from "next/link";

export default function Notification() {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        <h2>Notification</h2>
        <div>
          <Link href="/route/dashboard/archived" className="text-blue-600">
            Archived
          </Link>
        </div>
      </div>
    </Card>
  );
}
