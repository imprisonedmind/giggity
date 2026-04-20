import ListWrapper from "@/components/wrappers/listWrapper";
import FetchProfileContent from "@/components/profile/fetchProfileContent";

export const dynamic = "force-dynamic";

export default function Profile({ params }) {
  return (
    <ListWrapper>
      <FetchProfileContent params={params} />
    </ListWrapper>
  );
}

export function generateMetadata() {
  return {
    themeColor: "#22c55e",
  };
}
