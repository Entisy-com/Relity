/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-empty-function */
import Link from "next/link";
import styles from "../styles/pages/login.module.scss";
import type { GetServerSidePropsContext, NextPage } from "next";
import { getProviders, signIn, useSession } from "next-auth/react";
import type { ClientSafeProvider, LiteralUnion } from "next-auth/react/types";
import type { BuiltInProviderType } from "next-auth/providers";
import { useEffect } from "react";
import { getServerAuthSession } from "../server/common/get-server-auth-session";
import Modal from "../components/modal/Modal";
import ModalButton from "../components/modal/ModalButton";
import ModalTitle from "../components/modal/ModalTitle";

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
      <Modal open={true} setOpen={() => {}}>
        <>
          <ModalTitle value="Login" />
          {providers! &&
            Object.values(providers).map((provider) => {
              return (
                <ModalButton
                  value={provider.name}
                  key={provider.id}
                  onClick={() => signIn(provider.id)}
                />
              );
            })}
        </>
      </Modal>
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
