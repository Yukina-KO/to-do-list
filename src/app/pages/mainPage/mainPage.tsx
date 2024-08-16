import { User } from "../../../../server/getUsers";

interface MainPageProperties {
  data: User[] | undefined;
}
export const MainPage: React.FC<MainPageProperties> = ({ data }) => {
  return (
    <div>
      {data?.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email} - {user.phone}
        </li>
      ))}
    </div>
  );
};

export default MainPage;
