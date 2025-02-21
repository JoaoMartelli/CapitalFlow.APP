import axios from "axios";

export const HTTPClient = axios.create(
    {
        baseURL: "http://127.0.0.1:8000/",
        headers:
        {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Authorization",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE"
        }
    }
)