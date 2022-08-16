import { RootState } from '../store/index';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

export const useTSelector: TypedUseSelectorHook<RootState> = useSelector;
