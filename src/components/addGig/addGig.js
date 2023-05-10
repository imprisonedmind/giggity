import ApiMessage from "@/components/apiMessage/apiMessage";
import Header from "@/components/addGig/header";
import AddingInfo from "@/components/addGig/addingInfo";
import ManualEntry from "@/components/addGig/manualEntry";

export default function AddGig() {
  return (
    <div
      className={
        "border-1 relative h-full border border-neutral-700 bg-neutral-800" +
        " max-h-[90vh] max-w-[600px] overflow-y-auto rounded-lg p-4 text-neutral-500"
      }
    >
      <ApiMessage />
      <Header />
      <AddingInfo />
      <ManualEntry />
    </div>
  );
}
