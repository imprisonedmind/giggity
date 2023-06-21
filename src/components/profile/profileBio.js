export default function ProfileBio({ user }) {
  if (user?.bio)
    return (
      <div className={"text-sm"}>
        <p>{user?.bio}</p>
      </div>
    );
}
