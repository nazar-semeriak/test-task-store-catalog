import PageLayout from "@/components/layout/PageLayuot";
import { productDeetailsBreadcrumb } from "@/components/pages/product/data/productDeetailsBreadcrumb";
import PageBreadcrumb from "@/components/ui/PageBreadcrumb";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductDetailsLoading() {
  return (
    <PageLayout
      breadcrumb={<PageBreadcrumb data={productDeetailsBreadcrumb} />}
    >
      <div className=" max-w-[800px] m-auto grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,_350px)_minmax(0,_450px)]">
        <Skeleton className=" w-full aspect-[1/1] rounded-lg" />
        <div className=" flex flex-col gap-2 justify-between">
          <div className=" flex flex-col gap-4">
            <Skeleton className=" w-full aspect-[10/1] rounded-sm" />
            <Skeleton className=" w-full aspect-[8/1] rounded-sm" />
            <div className=" flex items-center gap-2">
              <Skeleton className=" min-w-[100px] h-[24px] rounded-sm" />
              <Skeleton className=" w-full aspect-[12/1] rounded-sm" />
            </div>
          </div>
          <div className=" flex flex-col gap-8">
            <Skeleton className=" max-w-[80px] h-[24px] rounded-sm" />
            <Skeleton className=" w-full aspect-[10/1] rounded-sm" />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
