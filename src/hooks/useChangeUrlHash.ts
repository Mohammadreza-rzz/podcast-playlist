import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const useUrlChange = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [hash, setHash] = useState<string>(
    typeof window !== "undefined" ? window.location.hash : ""
  );

  const [fullUrl, setFullUrl] = useState<string>(
    pathname + "?" + searchParams.toString() + hash
  );

  useEffect(() => {
    setFullUrl(pathname + "?" + searchParams.toString() + hash);
  }, [pathname, searchParams, hash]);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return { fullUrl, hash };
};

export default useUrlChange;
