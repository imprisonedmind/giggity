export default function ProfileFirstLastName({ user }) {
  if (user?.first_name && user?.last_name)
    return (
      <div>
        <p className={"text-lg capitalize"}>
          {user.first_name} {user.last_name}
        </p>
      </div>
    );
}
