const URL = import.meta.env.VITE_APP_API_URL;

export async function getAllMessages() {
    return await fetch(`${URL}/posts`).then((res) => {
        console.log(res);
        return res.json();
    });
}

// index/Get one
export async function getSingleMessage(id) {
    return await fetch(`${URL}/posts/${id}`).then((res) => res.json());
}

// Create
export async function createMessage(item) {
    return await fetch(`${URL}/posts/`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
    });
}

// Update
export async function updateMessage(id, item) {
    return await fetch(`${URL}/posts/${id}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
    });
}

// Delete
export async function destroyMessage(id) {
    return await fetch(`${URL}/posts/${id}`, {
        method: "DELETE",
    });
}

export async function getAllReplies(id) {
    return await fetch(`${URL}/replies/${id}`).then((res) => {
        console.log(res);
        return res.json();
    });
}

export async function createReply(item) {
    return await fetch(`${URL}/replies/`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
    });
}

export async function destroyReply(id, item) {
    console.log("delete reply calls")
    return await fetch(`${URL}/replies/${id}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
    });
}