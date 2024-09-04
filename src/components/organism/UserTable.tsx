import { User } from "../../types/UserTypes";

type Props = {
  data: User[];
};

function UserTable({ data }: Props) {
  return (
    <div className="relative w-screen h-screen overflow-x-auto md:w-[80vw] mt-12">
      <table className="table-auto w-full text-sm text-left rtl:text-right text-gray-500 rounded-md">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Username
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Phone
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user) => {
            return (
              <tr className="bg-white border-b" key={`user_${user.id}`}>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.username}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
