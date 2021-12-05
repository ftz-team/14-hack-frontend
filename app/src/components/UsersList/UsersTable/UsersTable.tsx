import Router from "next/router";
import { useEffect, useState } from "react";
import { StageThumb } from "../../StageThumb/StageThumb";
import {
  UsersListTop,
  UsersListHeader,
  UsersListGrid,
  UsersListColName,
  UsersTableCard,
  UserInfo,
  UserAvatar,
  UserName,
  UserEmail,
  UsersListBottom,
} from "./UsersTable.styled";

export const UsersTable: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    setUsers([
      {
        image:
          "https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Esthera Jackson",
        email: "esthera@simmmple.com",
        stage: 2,
      },
    ]);
  }, []);

  return (
    <>
      <UsersListTop>
        <UsersListHeader>Список участников</UsersListHeader>
      </UsersListTop>
      <UsersListGrid>
        <UsersListColName>Имя</UsersListColName>
        <UsersListColName>Cтатус</UsersListColName>
        <UsersListColName>Имя</UsersListColName>
        {users.map((user) => (
          <>
            <UsersTableCard onClick={() => Router.push("/form/1")}>
              <UsersListColName>
                <UserInfo>
                  <UserAvatar url={user.image} />
                  <div>
                    <UserName>{user.name}</UserName>
                    <UserEmail>{user.email}</UserEmail>
                  </div>
                </UserInfo>
              </UsersListColName>
            </UsersTableCard>
            <UsersTableCard>
              <UsersListColName>{StageThumb(user.stage)}</UsersListColName>
            </UsersTableCard>
            <UsersTableCard>
              <UsersListColName>Имя</UsersListColName>
            </UsersTableCard>
          </>
        ))}
      </UsersListGrid>
      <UsersListBottom />
    </>
  );
};
