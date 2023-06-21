export default function ProfileUsername({ user }) {
  return (
    <div>
      {user?.username && <p className={"text-sm"}>@{user?.username}</p>}
    </div>
  );
}
