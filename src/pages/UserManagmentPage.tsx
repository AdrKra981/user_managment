import { useEffect } from "react";
import Spinner from "../components/atoms/Spinner";
import FilterBar from "../components/organism/FilterBar";
import UserTable from "../components/organism/UserTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../app/userSlice";
import { AppDispatch, RootState } from "../app/store";

const UserManagmentPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filteredUsers, filters, loading } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="w-screen bg-orange-100 flex flex-col items-center ">
      <h2 className="text-3xl font-mono text-gray-500">User managment</h2>
      <FilterBar filters={filters} />
      <UserTable data={filteredUsers || []} />
    </div>
  );
};

export default UserManagmentPage;
