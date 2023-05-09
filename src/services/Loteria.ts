import api from './api';
import { LoteriaProps } from '../types';

class Loteria {
    async get(): Promise<LoteriaProps> {
        const { data } = await api.get("/");
        return data;
    }
}

const loteria = new Loteria();
export default loteria;