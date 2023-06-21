import ListWrapper from "@/components/wrappers/listWrapper";
import NavBack from "@/components/gigOverview/navBack";
import ProfileContent from "@/components/profile/profileContent";

export default function Profile({ params }) {
  return (
    <ListWrapper>
      <NavBack title={"Your Profile"} />
      <ProfileContent params={params} />
    </ListWrapper>
  );
}

export function generateMetadata() {
  return {
    themeColor: "#22c55e",
  };
}
