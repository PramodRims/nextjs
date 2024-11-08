import DashboardCard from "@/components/dashboardcard";
import Link from "next/link";
export default function DefaultNotifications() {
    return (
        <main>
            <DashboardCard>Notifications</DashboardCard>
            <Link href="/complex-dashboard/archived">Archived</Link>
        </main>
    );
}