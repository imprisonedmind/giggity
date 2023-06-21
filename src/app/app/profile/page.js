import ListWrapper from "@/components/wrappers/listWrapper";
import FetchOwnProfile from "@/components/profile/fetchOwnProfile";

export default function Profile() {
  return (
    <ListWrapper>
      <FetchOwnProfile />
    </ListWrapper>
  );
}

export function generateMetadata() {
  return {
    themeColor: "#22c55e",
  };
}
