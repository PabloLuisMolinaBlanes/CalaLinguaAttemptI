import type { RootState } from './state/store';
import { useNavigate, type NavigateFunction } from 'react-router';

export const checkAuthState = (authState : RootState, navigate : NavigateFunction) => {
    if (authState === "") {
        navigate("/login");
    }
}