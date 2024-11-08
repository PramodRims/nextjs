import DashboardCard from "@/components/dashboardcard";
import Link from "next/link";
export default function ArchivedNotifications() {
    return (
        <main>
            <h1 className="text-3xl font-bold underline">Archived Notifications</h1>
            <Link href="/complex-dashboard">Default</Link>
        </main>
    );
}