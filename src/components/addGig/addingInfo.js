import { FormikProvider } from "formik";
import AddGigDetails from "@/components/addGig/addGigDetails";
import { useAddGigContext } from "@/context/addGig";
import ImageDescriptionHeader from "@/components/addGig/imageDescriptionHeader";
import GetArtists from "@/components/addGig/getArtists";

export default function AddingInfo() {
  const { formik, showInputs, showGetArtists } = useAddGigContext();

  return (
    <div className={"flex flex-col items-center gap-2"}>
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          {showInputs && (
            <>
              <ImageDescriptionHeader />
              <AddGigDetails />
            </>
          )}
          {showGetArtists && <GetArtists />}
        </form>
      </FormikProvider>
    </div>
  );
}
