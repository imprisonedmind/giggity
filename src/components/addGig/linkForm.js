import {FormikProvider} from "formik";
import FormInput from "@/components/form/input";

export default function LinkForm({formik, showInstaInput, showSubmission}) {

  if (showInstaInput && !showSubmission) {
    return <>
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <FormInput id={"link"} name={"link"} placeholder={"Enter Instagram link"}
                     onChange={formik.handleChange}/>
        </form>
      </FormikProvider>
      <div onClick={formik.handleSubmit}
           className={"flex bg-neutral-900 p-2 rounded-lg border border-1" +
               " border-neutral-700 justify-center cursor-pointer mt-4"}>
        <p>Submit</p>
      </div>
    </>
  } else return null

}