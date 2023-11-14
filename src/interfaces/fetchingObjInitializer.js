export const postsObjInitializer = {
    thread_id: 0,
    user_id: 0,
    user_name: "",
    time_stamp: Date.now(),
    thread_message: "",
    profile_pic: "",
    message_pic: "",
};

export const usersObjInitializer = {
    user_id: 0,
    user_name: "",
    user_password: "",
    manager: false,
};

export const replysObjInitializer = {
    replys_id: 0,
    thread_id: 0,
    reply_user: "",
    reply_message: "",
};

export const reply_pw = {
    replys_id: 0,
    pw_id: 0,
    reply_pw: "",
};