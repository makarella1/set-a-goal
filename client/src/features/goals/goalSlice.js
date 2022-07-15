import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import goalService from './goalService';

const initialState = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  isEditing: false,
  id: null,
};

export const createGoal = createAsyncThunk(
  'goals/create',
  async (goalData, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.user.token;
      return goalService.createGoal(goalData, token);
    } catch (error) {
      const message =
        error?.response?.data?.message || error.message || error.toString();
      return rejectWithValue(message);
    }
  }
);

export const getGoals = createAsyncThunk(
  'goals/getAll',
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.user.token;
      return goalService.getGoals(token);
    } catch (error) {
      const message =
        error?.response?.data?.message || error.message || error.toString();
      return rejectWithValue(message);
    }
  }
);

export const deleteGoal = createAsyncThunk(
  'goals/delete',
  async (id, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.user.token;
      return goalService.deleteGoal(id, token);
    } catch (error) {
      const message =
        error?.response?.data?.message || error.message || error.toString();
      return rejectWithValue(message);
    }
  }
);

export const editGoal = createAsyncThunk(
  'goals/edit',
  async ({ id, text }, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.user.token;
      return goalService.editGoal(id, token, text);
    } catch (error) {
      const message =
        error?.response?.data?.message || error.message || error.toString();
      return rejectWithValue(message);
    }
  }
);

const goalSlice = createSlice({
  name: 'goal',
  initialState,
  reducers: {
    reset: () => initialState,
    setEditing: (state, action) => {
      state.isEditing = true;
      state.id = action.payload;
    },
    resetEditing: (state) => {
      state.isEditing = false;
      state.id = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createGoal.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createGoal.fulfilled, (state, action) => {
      state.isSuccess = true;
      state.isLoading = false;
      state.goals.push(action.payload);
    });
    builder.addCase(createGoal.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
    builder.addCase(getGoals.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getGoals.fulfilled, (state, action) => {
      state.isSuccess = true;
      state.isLoading = false;
      state.goals = action.payload;
    });
    builder.addCase(getGoals.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
    builder.addCase(deleteGoal.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteGoal.fulfilled, (state, action) => {
      state.isSuccess = true;
      state.isLoading = false;
      state.goals = state.goals.filter(
        (goal) => goal._id !== action.payload.id
      );
    });
    builder.addCase(deleteGoal.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
    builder.addCase(editGoal.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(editGoal.fulfilled, (state, action) => {
      state.isSuccess = true;
      state.isLoading = false;
      state.goals = state.goals.map((goal) => {
        if (goal._id === state.id) {
          return action.payload;
        } else {
          return goal;
        }
      });
      state.isEditing = false;
      state.id = null;
    });
    builder.addCase(editGoal.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export const { reset, setEditing, resetEditing } = goalSlice.actions;

export default goalSlice.reducer;
