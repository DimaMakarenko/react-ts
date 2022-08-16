import { AppDispatch } from './../store/index';
import { useDispatch } from 'react-redux';

export const useTDispatch = () => useDispatch<AppDispatch>();
