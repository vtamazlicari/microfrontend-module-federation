export const UserCard = ({ username }: { username?: string }) => {
  return (
    <div style={{ border: "3px solid red" }}>
      <div>username: {username ?? "user"}</div>
      <div>password: 112321</div>
    </div>
  );
};
