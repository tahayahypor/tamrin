function UserCard({ user }) {
  return (
    <div className="user-card">
      <img
        src={user.avatar}
        alt={user.fullname}
        className="user-avatar"
      />

      <h2>{user.fullname}</h2>

      <p className="user-role">{user.role}</p>

      <p className={user.isAvailable ? "available" : "unavailable"}>
        {user.isAvailable ? "Available" : "Not Available"}
      </p>
    </div>
  );
}

export default UserCard;