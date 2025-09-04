import React, {Suspense} from "react";
import {lusitana} from "@/app/ui/fonts";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import {CardSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton} from "@/app/ui/skeletons";
import {Card} from "@/app/ui/dashboard/cards";
import {
    fetchTotalPaidInvoices,
    fetchTotalPendingInvoices,
    fetchTotalCustomers, fetchTotalInvoices
} from "@/app/lib/data";

export default async function DashboardPage() {

    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<CardSkeleton/>}>
                    <Card title="Collected" fetchFunction={fetchTotalPaidInvoices} type="collected"/>
                </Suspense>
                <Suspense fallback={<CardSkeleton/>}>
                    <Card title="Pending" fetchFunction={fetchTotalPendingInvoices} type="pending"/>
                </Suspense>
                <Suspense fallback={<CardSkeleton/>}>
                    <Card title="Total Invoices" fetchFunction={fetchTotalInvoices} type="invoices"/>
                </Suspense>
                <Suspense fallback={<CardSkeleton/>}>
                    <Card
                        title="Total Customers"
                        fetchFunction={fetchTotalCustomers}
                        type="customers"
                    />
                </Suspense>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<RevenueChartSkeleton/>}>
                    <RevenueChart/>
                </Suspense>

                <Suspense fallback={<LatestInvoicesSkeleton/>}>
                    <LatestInvoices/>
                </Suspense>
            </div>
        </main>
    )
}