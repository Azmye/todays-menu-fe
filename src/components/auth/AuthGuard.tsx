import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router";

type Props = {
  children: React.ReactNode;
};

export default function AuthGuard({ children }: Props) {
  const navigate = useNavigate();
  const isLoggedIn = true;

  const check = useCallback(() => {
    if (!isLoggedIn) {
      navigate("/welcome", {
        replace: true,
      });
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
}
