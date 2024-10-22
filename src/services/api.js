import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://kbbuyazocsmnsuwcktyv.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtiYnV5YXpvY3NtbnN1d2NrdHl2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyOTU0Mjk3OSwiZXhwIjoyMDQ1MTE4OTc5fQ.W82FM5s-6WcPa3OK_A6NA0TUo8bNQ4O8MsBYJcOKDvc",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtiYnV5YXpvY3NtbnN1d2NrdHl2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyOTU0Mjk3OSwiZXhwIjoyMDQ1MTE4OTc5fQ.W82FM5s-6WcPa3OK_A6NA0TUo8bNQ4O8MsBYJcOKDvc"
    }
});