import {
  CaseReducer,
  createAsyncThunk,
  createSlice,
  current,
  PayloadAction,
} from "@reduxjs/toolkit";
import type { User } from "../types/UserTypes";

export const fetchUsers = createAsyncThunk<User[]>(
  "users",
  async (_, thunkAPI) => {
    try {
      let url = "https://jsonplaceholder.typicode.com/users?";
      const response = await fetch(url, {
        headers: { "Content-Type": "application/json" },
      });

      return (await response.json()) as User[];
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

type State = {
  users: User[];
  filteredUsers: User[];
  filters: { key: string; value: string };
  loading: boolean;
};

const filtersReducer: CaseReducer<
  State,
  PayloadAction<{ key: string; value: string }>
> = (state, action) => {
  let usersState = current(state.users);

  state.filters = action.payload;
  state.filteredUsers = usersState.filter((user) =>
    user[action.payload.key as keyof User]
      .toString()
      .toLocaleLowerCase()
      .includes(action.payload.value.toLocaleLowerCase())
  );

  return state;
};

const usersSlice = createSlice({
  name: "user",
  initialState: {
    users: [] as User[],
    filteredUsers: [] as User[],
    filters: { key: "name", value: "" },
    loading: false,
  } satisfies State as State,
  reducers: {
    setFilters: filtersReducer,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.filteredUsers = action.payload;
      state.loading = false;
    });
  },
});

export const { setFilters } = usersSlice.actions;
export default usersSlice.reducer;
