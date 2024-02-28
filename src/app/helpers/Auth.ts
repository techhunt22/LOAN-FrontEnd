import axios from 'axios';

export async function Auth() {
    const res = await axios.get('/api/resource/auth');
    return res;
}