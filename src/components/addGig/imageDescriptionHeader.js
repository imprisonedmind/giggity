import Image from "next/image";

export default function ImageDescriptionHeader({imgUrl, description, formik}) {
  return <div className={"flex flex-nowrap gap-4 w-full"}>
    <div className={'relative w-full aspect-square overflow-hidden ' +
        ' m-auto rounded-lg h-[300px]'}>
      <Image src={imgUrl} alt={"test"} fill={true} className={"object-cover"}/>
    </div>
    <div className={'flex flex-col relative w-full gap-2'}>
      <p className={"font-bold"}>Description</p>
      <textarea
          defaultValue={description}
          onChange={formik.handleChange}
          className={"h-full bg-neutral-900 p-2 rounded-md text-sm focus:outline-none"}
      />
    </div>
  </div>
}