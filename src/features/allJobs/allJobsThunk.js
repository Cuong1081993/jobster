import customFetch from "../../utils/axios";

export const getAllJobsThunk = async (_, thunkAPI) => {
  try {
    const resp = await customFetch.get(`/jobs`);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
