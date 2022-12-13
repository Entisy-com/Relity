import { User } from "@prisma/client";
import axios from "axios";
import { signOut } from "next-auth/react";
import { FC, useState } from "react";
import { ModalFileSelect, ModalImage } from "../components/modal";
import Modal from "../components/modal/Modal";
import ModalButton from "../components/modal/ModalButton";
import ModalInput from "../components/modal/ModalInput";
import ModalTitle from "../components/modal/ModalTitle";
import styles from "../styles/pages/settings.module.scss";
import { CDN_BASE_URL, CDN_UPLOAD_URL, LOGGER_URL } from "../utils/constants";
import { trpc } from "../utils/trpc";

type Props = {
  userid: string;
  setSettingsOpen: Function;
};

const UserSettings: FC<Props> = ({ userid, setSettingsOpen }) => {
  const updateSettings = trpc.user.updateSettings.useMutation();
  const updateUser = trpc.user.updateUser.useMutation();

  const { data: user } = trpc.user.getUserById.useQuery({
    id: userid,
  });

  const [showChangeUsernameModalOpen, setShowChangeUsernameModalOpen] =
    useState(false);
  const [showChangeEmailModalOpen, setShowChangeEmailModalOpen] =
    useState(false);
  const [showChangePasswordModalOpen, setShowChangePasswordModalOpen] =
    useState(false);
  const [uploadThemeModalOpen, setUploadThemeModalOpen] = useState(false);
  const [selectThemeModalOpen, setSelectThemeModalOpen] = useState(false);
  const [changePfpModalOpen, setChangePfpModalOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("default");

  const [themeFilesToUpload, setThemeFilesToUpload] = useState<File[]>([]);

  async function handleUploadThemes() {
    const formData = new FormData();
    for (const file of themeFilesToUpload) {
      formData.append(file.name, file);
    }

    const { data, status } = await axios.post(
      `${CDN_UPLOAD_URL}/theme`,
      formData
    );

    let themes: string[] = [];

    for (let i = 0; i < themeFilesToUpload.length; i++) {
      themes.push(
        `${CDN_BASE_URL}/${data.message[themeFilesToUpload[i]?.name!].md5}.${
          data.message[themeFilesToUpload[i]?.name!].name.split(".")[1]
        }`
      );
    }

    const message = `Uploaded Theme${
      themes.length > 1 && "'s"
    } with the name of ${themes.toString()}`;

    axios.post(`${LOGGER_URL}`, {
      message,
    });
  }

  async function handleUploadPfp(file: File) {
    const formData = new FormData();
    formData.append(file.name, file);

    const { data, status } = await axios.post(
      `${CDN_UPLOAD_URL}/user/pfp`,
      formData
    );

    const pfp = `${CDN_BASE_URL}/user/pfp-${data.message[file.name].md5}.${
      data.message[file.name].name.split(".")[1]
    }`;

    updateUser.mutate({
      id: userid,
      image: pfp,
    });

    const message = `Uploaded User Pfp with the name of ${CDN_BASE_URL}/user/pfp-${
      data.message[file.name].md5
    }.${data.message[file.name].name.split(".")[1]}`;

    axios.post(`${LOGGER_URL}`, {
      message,
    });
  }

  function handleChangeTheme() {
    updateSettings.mutate({
      theme: selectedTheme,
    });
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.options}>
          <div id="account" className={styles.option}>
            <h1 className={styles.option_title}>Account</h1>
            <div>
              <h3>Username:</h3>
              <h5>{user?.name}</h5>
              <h3>Email:</h3>
              <h5>{user?.email}</h5>
              <p id={styles.gap} />
              <p
                onClick={() => setShowChangePasswordModalOpen(true)}
                className={styles.option_category}
              >
                Change Password
              </p>
              <p id={styles.gap} />
              <p
                onClick={() => setChangePfpModalOpen(true)}
                className={styles.option_category}
              >
                Change Pfp
              </p>
            </div>
          </div>
          <div id="appearance" className={styles.option}>
            <h1 className={styles.option_title}>Appearance</h1>
          </div>
          <div id="audio" className={styles.option}>
            <h1 className={styles.option_title}>Audio</h1>
          </div>
          <div id="text" className={styles.option}>
            <h1 className={styles.option_title}>Text</h1>
          </div>
          <div id="keybinds" className={styles.option}>
            <h1 className={styles.option_title}>Keybinds</h1>
          </div>
          <div id="language" className={styles.option}>
            <h1 className={styles.option_title}>Language</h1>
          </div>
          <div id="activity" className={styles.option}>
            <h1 className={styles.option_title}>Activity</h1>
          </div>
          <div id="themes" className={styles.option}>
            <h1 className={styles.option_title}>Themes</h1>
            <div className={styles.themes}>
              <p
                className={styles.theme}
                onClick={() => setSelectedTheme("default")}
              >
                Default
              </p>
              <p
                className={styles.theme}
                onClick={() => setSelectedTheme("dark")}
              >
                Dark
              </p>
              <p
                className={styles.theme}
                onClick={() => setSelectedTheme("light")}
              >
                Light
              </p>
              <p
                className={styles.theme}
                onClick={() => setSelectThemeModalOpen(true)}
              >
                Custom
              </p>
              <p
                onClick={() => setUploadThemeModalOpen(true)}
                className={styles.option_category}
              >
                Upload Theme!
              </p>
            </div>
          </div>
          <div id="plugins" className={styles.option}>
            <h1 className={styles.option_title}>Plugins</h1>
          </div>
          <div id="developer" className={styles.option}>
            <h1 className={styles.option_title}>Developer</h1>
          </div>
        </div>
        <div className={styles.option_categories}>
          <p
            onClick={() => setSettingsOpen(false)}
            style={{
              color: "black",
              backgroundColor: "#fff",
            }}
            id={styles.no_hover}
            className={styles.option_category}
          >
            Back
          </p>
          <span id={styles.separator} />
          <a href="#account" className={styles.option_category}>
            Account
          </a>
          <a href="#appearance" className={styles.option_category}>
            Appearance
          </a>
          <span id={styles.separator} />
          <a href="#audio" className={styles.option_category}>
            Audio
          </a>
          <a href="#text" className={styles.option_category}>
            Text
          </a>
          <a href="#keybinds" className={styles.option_category}>
            Keybinds
          </a>
          <a href="#language" className={styles.option_category}>
            Language
          </a>
          <span id={styles.separator} />
          <a href="#activity" className={styles.option_category}>
            Activity
          </a>
          <a href="#themes" className={styles.option_category}>
            Themes
          </a>
          <a href="#plugins" className={styles.option_category}>
            Plugins
          </a>
          <span id={styles.separator} />
          <a href="#developer" className={styles.option_category}>
            Developer
          </a>
          <span id={styles.separator} />
          <p
            onClick={() => signOut()}
            style={{
              color: "firebrick",
              backgroundColor: "#fff",
            }}
            id={styles.no_hover}
            className={styles.option_category}
          >
            Log out!
          </p>
        </div>
      </div>
      <Modal
        closable
        open={showChangeUsernameModalOpen}
        setOpen={setShowChangeUsernameModalOpen}
      >
        <ModalTitle value="Change Username" />
        <ModalInput placeholder="Username" type="text" />
        <ModalInput placeholder="password" type="password" />
        <ModalButton value="Done!" />
      </Modal>
      <Modal
        closable
        open={showChangeEmailModalOpen}
        setOpen={setShowChangeEmailModalOpen}
      >
        <ModalTitle value="Change Email" />
        <ModalInput placeholder="Current Email" type="email" />
        <ModalInput placeholder="New Email" type="email" />
        <ModalInput placeholder="password" type="password" />
        <ModalButton value="Done!" />
      </Modal>
      <Modal
        blur
        closable
        open={showChangePasswordModalOpen}
        setOpen={setShowChangePasswordModalOpen}
      >
        <ModalTitle value="Change Password" />
        <ModalInput
          focus
          placeholder="Current Password"
          type="password"
          password
        />
        <ModalInput placeholder="New Password" type="password" password />
        <ModalInput
          placeholder="Repeat new Password"
          type="password"
          password
        />
        <ModalButton value="Done!" />
      </Modal>
      <Modal
        open={uploadThemeModalOpen}
        setOpen={setUploadThemeModalOpen}
        blur
        closable
      >
        <ModalTitle value="Upload Theme" />
        <ModalFileSelect
          multiple
          fileType=".css"
          onChangeMultiple={(files) => {
            let ret = [];
            for (const file of files) {
              ret.push(file);
            }
            setThemeFilesToUpload(ret);
          }}
        />
        <ModalButton
          value="Upload Themes!"
          onClick={() => handleUploadThemes()}
        />
      </Modal>
      <Modal
        open={changePfpModalOpen}
        setOpen={setChangePfpModalOpen}
        blur
        closable
        darken
      >
        <ModalImage src={user?.image ?? ""} size={100} />
        <ModalFileSelect
          fileType=".png, .jpg, .jpeg, .gif"
          onChange={(file) => {
            handleUploadPfp(file);
          }}
        />
      </Modal>
    </>
  );
};

export default UserSettings;
