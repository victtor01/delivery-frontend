import { StoreViewComponent } from "@/components/store-view-component";

export default function Home() {
  return (
    <div className="flex w-full p-3">
      <div className="grid grid-cols-5 mx-auto w-full max-w-main gap-6">
        <StoreViewComponent />
        <StoreViewComponent />
        <StoreViewComponent />
        <StoreViewComponent />
        <StoreViewComponent />
        <StoreViewComponent />
      </div>
    </div>
  );
}
