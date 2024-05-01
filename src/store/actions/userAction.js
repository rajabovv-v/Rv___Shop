import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../api";
import { registerUrl } from "../../utils/urls";


export const register = createAsyncThunk('register', async (data) => {
    let response = await Axios.post(registerUrl, data);
    return response.data
})