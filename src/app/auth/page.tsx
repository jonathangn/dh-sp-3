import TabAccess from "@/components/auth/TabAccess";

import { ToastContainer } from "react-toastify";

interface ToastProviderProps {
  children: React.ReactNode;
}

export default function AuthPage() {
  return <>
    <ToastContainer />
    <TabAccess />;
  </>
}
