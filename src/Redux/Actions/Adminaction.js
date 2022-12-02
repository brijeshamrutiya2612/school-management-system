import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const studentRegisterData = createAsyncThunk(
  "stud/register",
  async ({ firstName, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      await axios.post(
        "http://localhost:3001/students",
        { firstName, email, password },
        config
      );
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
