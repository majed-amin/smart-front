// routes.ts
import {Icon} from "@iconify/react";

export interface AppRoute {
    label: string;
    path?: string;
    icon?: React.ReactNode;
    children?: AppRoute[];
    meta?: { permissions?: string[] };
}

export const appRoutes: AppRoute[] = [
    {
        label: "الرئيسية",
        path: "/dashboard",
        meta: { permissions: ["admin", "user"] },
    },
    {
        label: "إدارة النقل والشحن",
        icon: <Icon icon="solar:box-minimalistic-linear" width="24" height="24" />,
        meta: { permissions: ["admin", "user"] },
        children: [
            {
                label: "وثيقة نقل",
                meta: { permissions: ["admin", "user"] },
                children: [
                    { label: "إضافة وثيقة نقل", path: "/dashboard/transportation-management/drivers/add-transportation" },
                    { label: "إضافة وثيقة نقل فرعية", path: "/dashboard/transportation-management/drivers/add-transportation" },
                    { label: "مرسل / مستلم", path: "/dashboard/transportation-management/drivers/add-transportation" },
                ]
            },
            {
                label: "السائقين",
                meta: { permissions: ["admin", "user"] },
                children: [
                    { label: "إضافة وثيقة نقل", path: "/dashboard/transportation-management/drivers/add-transportation" },
                ]
            },
            {
                label: "السائق",
                meta: { permissions: ["admin", "user"] },
                children: [
                    { label: "إضافة وثيقة نقل", path: "/dashboard/transportation-management/drivers/add-transportation" },
                ]
            },
            {
                label: "الناقل",
                meta: { permissions: ["admin", "user"] },
                children: [
                    { label: "إضافة وثيقة نقل", path: "/dashboard/transportation-management/drivers/add-transportation" },
                    { label: "إضافة وثيقة نقل فرعية", path: "/dashboard/transportation-management/drivers/add-transportation" },
                    { label: "مرسل / مستلم", path: "/dashboard/transportation-management/drivers/add-transportation" },
                    { label: "التفرع الرابع", path: "/dashboard/transportation-management/drivers/add-transportation" },
                    { label: "التفرع الخامس", path: "/dashboard/transportation-management/drivers/add-transportation" },
                    { label: "التفرع السادس", path: "/dashboard/transportation-management/drivers/add-transportation" },
                    { label: "التفرع السابع", path: "/dashboard/transportation-management/drivers/add-transportation" },
                ]
            },
            {
                label: "تهيئة إدارة النقل والشحن",
                meta: { permissions: ["admin", "user"] },
                children: [
                    { label: "نوع الشاحنة", path: "/dashboard/transportation-management/drivers/add-transportation" },
                    { label: "حجم الشاحنة", path: "/dashboard/transportation-management/drivers/add-transportation" },
                    { label: "إضافة شاحنة", path: "/dashboard/transportation-management/drivers/add-transportation" },
                    { label: "المدن", path: "/dashboard/transportation-management/drivers/add-transportation" },
                    { label: "نوع الحمولة", path: "/dashboard/transportation-management/drivers/add-transportation" },
                    { label: "المسارات", path: "/dashboard/transportation-management/drivers/add-transportation" },
                ]
            },
        ]
    },
    {
        label: "الطلبات",
        icon: <Icon icon="solar:box-minimalistic-linear" width="24" height="24" />,
        meta: { permissions: ["admin", "user"] },
        children: [
            { label: "إضافة طلب", path: "/dashboard/orders/add-order" },
            { label: "مصروفات الطلب", path: "/dashboard/orders/order-expenses" },
            { label: "فاتورة الطلب", path: "/dashboard/orders/order-invoice" },
            { label: "تقرير الأرباح", path: "/dashboard/orders/profit-report" },
            { label: "التفرع الخامس", path: "/dashboard/orders/branch-5" },
            { label: "التفرع السادس", path: "/dashboard/orders/branch-6" },
            { label: "التفرع السادس عشر", path: "/dashboard/orders/branch-16" },
        ]
    },
    {
        label: "المبيعات",
        icon: <Icon icon="solar:box-minimalistic-linear" width="24" height="24" />,
        meta: { permissions: ["admin", "user"] },
        children: [
            { label: "إضافة جلسة", path: "/dashboard/sales/add-session" },
            { label: "فاتورة مبيعات", path: "/dashboard/sales/sales-invoice" },
            { label: "عرض سعر", path: "/dashboard/sales/price-quote" },
            { label: "اضافة عميل", path: "/dashboard/sales/add-client" },
            { label: "الاقرار الضريبي", path: "/dashboard/sales/tax-declaration" },
            { label: "الاقرار الضريبي للناقل", path: "/dashboard/sales/transporter-tax-declaration" },
            { label: "تقرير مبيعات منتجات", path: "/dashboard/sales/products-sales-report" },
            { label: "المبيعات اليومية", path: "/dashboard/sales/daily-sales" },
            { label: "تقرير الأرباح", path: "/dashboard/sales/earnings-report" },
        ]
    },
    {
        label: "المشتريات",
        icon: <Icon icon="solar:box-minimalistic-linear" width="24" height="24" />,
        meta: { permissions: ["admin", "user"] },
        children: [
            { label: "إدارة المشتريات", path: "/dashboard/purchases/purchases-management" },
            { label: "اضافة مورد", path: "/dashboard/purchases/add-vendor" },
            { label: "تقارير وتحليلات", path: "/dashboard/purchases/reports-and-analytics" },
            { label: "إدارة المرتجعات", path: "/dashboard/purchases/returns-management" }
        ]
    },
    {
        label: "المخازن والفروع",
        icon: <Icon icon="solar:box-minimalistic-linear" width="24" height="24" />,
        meta: { permissions: ["admin", "user"] },
        children: [
            { label: "إضافة مخزن", path: "/dashboard/warehouses-and-branches/add-warehouse" },
            { label: "إضافة فرع", path: "/dashboard/warehouses-and-branches/add-branch" },
            { label: "إضافة فئة", path: "/dashboard/warehouses-and-branches/add-category" },
            { label: "إضافة العروض", path: "/dashboard/warehouses-and-branches/add-offers" },
            { label: "إضافة وحدة", path: "/dashboard/warehouses-and-branches/add-unit" },
            { label: "إضافة منتج", path: "/dashboard/warehouses-and-branches/add-product" },
            { label: "الكمية الإفتتاحية", path: "/dashboard/warehouses-and-branches/opening-quantity" },
            { label: "إشعارات المخزون", path: "/dashboard/warehouses-and-branches/stock-notifications" },
            { label: "المنتجات القريبة للأنتهاء", path: "/dashboard/warehouses-and-branches/expiring-products" },
            { label: "صرف مخزوني", path: "/dashboard/warehouses-and-branches/stock-issuance" },
            { label: "مخزون تالف", path: "/dashboard/warehouses-and-branches/damaged-stock" },
            { label: "إنشاء قالب باركود", path: "/dashboard/warehouses-and-branches/create-barcode-template" },
            { label: "تقرير مخزوني", path: "/dashboard/warehouses-and-branches/inventory-report" },
            { label: "تقرير حركة منتج", path: "/dashboard/warehouses-and-branches/product-movement-report" },
            { label: "تقرير الأكثر مبيعاً", path: "/dashboard/warehouses-and-branches/best-selling-report" },
        ]
    },
    {
        label: "الموظفين",
        icon: <Icon icon="solar:box-minimalistic-linear" width="24" height="24" />,
        meta: { permissions: ["admin", "user"] },
        children: [
            { label: "تجربة", path: "/dashboard/transportation-management" }
        ]
    },
    {
        label: "المستخدمين",
        icon: <Icon icon={'solar:user-linear'} width="24" height="24" />,
        meta: { permissions: ["admin"] },
        children: [
            { label: "List", path: "/dashboard/users", meta: { permissions: ["admin"] } },
            { label: "List", path: "/dashboard/users", meta: { permissions: ["admin"] } },
            { label: "List", path: "/dashboard/users", meta: { permissions: ["admin"] } },
            { label: "List", path: "/dashboard/users", meta: { permissions: ["admin"] } },
            { label: "Create", path: "/dashboard/users/create", meta: { permissions: ["admin"] } },
        ],
    },
    {
        label: "الإعدادات",
        path: "/dashboard/settings",
        icon: <Icon icon={'solar:settings-linear'} width="24" height="24" />,
        meta: { permissions: ["admin", "editor"] },
    },
];
