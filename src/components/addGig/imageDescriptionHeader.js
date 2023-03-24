import Image from "next/image";
import { useEffect } from "react";

export default function ImageDescriptionHeader({
  imgUrl,
  description,
  formik,
  handleFormInputChange,
}) {
  useEffect(() => {
    formik.setFieldValue("description", description);
  }, [description]);

  return (
    <div className={"flex w-full flex-nowrap gap-4"}>
      <div className={"flex min-w-[150px] grow flex-col gap-2"}>
        <p>Cover Image</p>

        <div
          className={
            "relative m-auto aspect-square w-full overflow-hidden rounded-lg"
          }
        >
          <Image
            src={imgUrl}
            alt={"test"}
            fill={true}
            className={"object-cover"}
          />
        </div>
      </div>
      <div className={"relative flex min-w-[150px] grow flex-col gap-2"}>
        <p>Description</p>
        <textarea
          id={"description"}
          name={"description"}
          placeholder={
            "You have two options: you can either create a new description or copy and" +
            " paste one from Instagram. If you mention any @accounts, they will be " +
            "automatically converted to links."
          }
          defaultValue={formik.values.description}
          onChange={handleFormInputChange}
          className={
            "h-full rounded-md bg-neutral-900 p-2 text-sm focus:outline-none"
          }
        />
      </div>
    </div>
  );
}
