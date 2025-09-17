import type { FC } from "react";
import "./UserCard.scss";

type UserCardProps = {
  name: string;
  age: number;
  onClick: (name: string) => void;
};

const UserCard: FC<UserCardProps> = ({ name, age, onClick }) => {
  const handleClick = () => {
    onClick(name);
  };

  return (
    <div className="user-card" onClick={handleClick}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserCard;
