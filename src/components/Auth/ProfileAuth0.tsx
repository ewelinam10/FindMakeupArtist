import React, { Fragment } from "react";
import NavBar from "../Widgets/NavBar";
import { userInfo } from "os";
import { useAuth0 } from "@auth0/auth0-react";

const ProfileAuth0 = () => {
    const { user, isAuthenticated } = useAuth0();
    const picture = user ? user.picture : 'https://lh3.googleusercontent.com/-dgnJ5UkB4yY/UM0AVEldnOI/AAAAAAAAFkI/KldxFmGWPV86KuqlCI2teezLR-WQB-4PQCEwYBhgLKtMDAL1OcqzW14OfFGbOlk383HND5ynNPONv2o7XeDwovITZW9Ajp5BaaemG3YJXN9mptSwSWvUCkhizhLeo7d23I6ppKf4a98VtqlgS07z2jc9hmtc96SE2Mmt3OGQNW4V3U8Fl0KiOKTZYV9ILHE33ENPcIoiwzS-4l9qphBTpQf0tesNFQjJppmG-UPcYENzM5WLPenv2cSgNvqLRnXEELzh6Y3OA2xHbwG-W7olv-4X0MB8pa9RhwCUC7c7uGId0ZnEmJxcp5Rpb0AKLC-crMyQLBPm6KnrTQ7VAECpCYUH2Dmipt-2tZbFDmiN9-YQy6GVLPS_lkAo6Vu6SkWs43uJqUMHPqarYoFwBFHq-YksO_KcIdNgnulq_XgAkS1l_3UtlsdAlHQyASBm68E-_G88wbe-7zP8V628jUfK1tklLLnbOVa-f2iTfxc70STTdu4V7g5DJcrSbvBdLPXtTIa34g3MxsIvPGzmhv6SyCfXh0hmjl9vaMRJABCxPXpO-YmZ5CMDTFRvtssFsh5j61WG-3V1DhxvUhS8cBfJ0StKny_LvSAoXLMo1mx_kudF897DCE6Uq7Kkpcbw027piv_VaTT0oW_sVvYITSyf9-yNW8Wowk6rk-QU/w139-h140-p/790x790_FW2FK28TISS6B2RYHK.jpg'
    return (
        <div className="navBar stick">
            <img src={picture} className="collapsible" />
            <div className="settingsList">
                <p>Lorem ipsum...</p>
            </div>
        </div>

    );
};

export default ProfileAuth0;