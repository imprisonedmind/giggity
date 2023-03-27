export default function LoadingGig() {
  return (
    <div className={"flex h-full w-full flex-col gap-4"}>
      {/*FIRST SECTION*/}
      <div className={"grid h-[600px] grid-cols-4 gap-4 md:h-[300px]"}>
        <div
          className={
            "col-span-4 row-span-1 rounded-lg bg-neutral-800 md:col-span-3" +
            " p-4"
          }
        >
          <div className={"flex h-full w-full animate-pulse flex-nowrap gap-4"}>
            <div
              className={"h-full w-2/4 rounded-md bg-neutral-700 md:w-3/4"}
            ></div>
            <div
              className={"h-full w-2/4 rounded-md bg-neutral-700 md:w-1/4"}
            ></div>
          </div>
        </div>
        <div
          className={
            "col-span-4 row-span-1 rounded-lg bg-neutral-800 md:col-span-1" +
            " p-4"
          }
        >
          <div
            className={"h-full w-full animate-pulse rounded-md bg-neutral-700"}
          ></div>
        </div>
      </div>

      {/*SECOND SECTION*/}
      <div className={"flex w-full flex-wrap gap-4 md:flex-nowrap"}>
        <div
          className={"h-[100px] w-full grow rounded-lg bg-neutral-800 md:w-1/2"}
        >
          <div
            className={"flex h-full w-full animate-pulse flex-nowrap gap-4 p-4"}
          >
            <div className={"h-full w-3/4 rounded-md bg-neutral-700"}></div>
            <div className={"h-full w-3/4 rounded-md bg-neutral-700"}></div>
            <div className={"h-full w-3/4 rounded-md bg-neutral-700"}></div>
          </div>
        </div>
        <div className={"h-[100px] w-1/2 grow rounded-lg bg-neutral-800"}>
          <div
            className={"flex h-full w-full animate-pulse flex-nowrap gap-4 p-4"}
          >
            <div className={"h-full w-3/4 rounded-md bg-neutral-700"}></div>
            <div className={"h-full w-3/4 rounded-md bg-neutral-700"}></div>
          </div>
        </div>
      </div>

      {/*THIRD SECTION*/}
      <div className={"flex h-[450px] w-full flex-wrap gap-4 md:flex-nowrap"}>
        <div
          className={"h-full w-full grow rounded-lg bg-neutral-800 md:w-1/2"}
        >
          <div
            className={"flex h-full w-full animate-pulse flex-col gap-4 p-4"}
          >
            <div className={"h-1/4 w-full rounded-md bg-neutral-700"}></div>
            <div className={"h-1/6 w-full rounded-md bg-neutral-700"}></div>
            <div className={"h-1/6 w-full rounded-md bg-neutral-700"}></div>
            <div className={"h-1/6 w-full rounded-md bg-neutral-700"}></div>
            <div className={"h-1/6 w-full rounded-md bg-neutral-700"}></div>
          </div>
        </div>
        <div className={"h-full w-1/2 grow rounded-lg bg-neutral-800"}>
          <div
            className={"flex h-full w-full animate-pulse flex-col gap-4 p-4"}
          >
            <div className={"h-1/4 w-full rounded-md bg-neutral-700"}></div>
            <div className={"h-1/6 w-full rounded-md bg-neutral-700"}></div>
            <div className={"h-1/6 w-full rounded-md bg-neutral-700"}></div>
            <div className={"h-1/6 w-full rounded-md bg-neutral-700"}></div>
            <div className={"h-1/6 w-full rounded-md bg-neutral-700"}></div>
          </div>
        </div>
        <div className={"h-full w-1/2 grow rounded-lg bg-neutral-800"}>
          <div
            className={"flex h-full w-full animate-pulse flex-col gap-4 p-4"}
          >
            <div className={"h-1/4 w-full rounded-md bg-neutral-700"}></div>
            <div className={"h-1/6 w-full rounded-md bg-neutral-700"}></div>
            <div className={"h-1/6 w-full rounded-md bg-neutral-700"}></div>
            <div className={"h-1/6 w-full rounded-md bg-neutral-700"}></div>
            <div className={"h-1/6 w-full rounded-md bg-neutral-700"}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
