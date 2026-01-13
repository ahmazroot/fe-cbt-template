import { useMutation } from '@tanstack/react-query';
import { loginService } from '../../services/login.service';
import { useAuthStore } from '@/modules/auth/stores/auth.store';

export const useLogin = () => {
  const setToken = useAuthStore((state) => state.setToken);

  return useMutation({
    mutationFn: loginService,
    onSuccess: (data) => {
      setToken(data.token);
    },
  });
};
