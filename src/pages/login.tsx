import Link from "next/link";
import styles from "../styles/pages/login.module.scss";
import type { GetServerSidePropsContext, NextPage } from "next";
import { getProviders, signIn, useSession } from "next-auth/react";
import type { ClientSafeProvider, LiteralUnion } from "next-auth/react/types";
import type { BuiltInProviderType } from "next-auth/providers";
import { useEffect } from "react";
import { getServerAuthSession } from "../server/common/get-server-auth-session";

type Props = {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
};

const Login: NextPage<Props> = ({ providers }) => {
  const { data: sessionData } = useSession();
  useEffect(() => {
    if (sessionData) window.location.href = "/";
  }, [sessionData]);
  return (
    <div className={styles.wrapper}>
      <Link href="..">
        <p className={styles.back}>Back</p>
      </Link>
      <div className={styles.container}>
        <form className={styles.form}>
          <h1 className={styles.title}>Login</h1>
          {providers
            ? Object.values(providers).map((provider) => (
                <div
                  onClick={() => signIn(provider.id)}
                  className={styles.component}
                  key={provider.id}
                >
                  {provider.name}
                </div>
              ))
            : null}
        </form>
      </div>
    </div>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getServerAuthSession(ctx);
  const providers = await getProviders();
  if (session) return { redirect: { destination: "/", persistent: false } };
  else return { props: { providers } };
}

export default Login;
