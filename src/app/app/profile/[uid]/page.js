import ListWrapper from "@/components/wrappers/listWrapper";
import FetchProfileContent from "@/components/profile/fetchProfileContent";

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
